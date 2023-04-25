// "use strict";
// var base_url = `${window.origin}`;
// var loading = '<%= show_loader %>';

// $(document).ready(() => {
//   $("#maintable").DataTable({ pageLength: 100 });
//   $("#usertable").DataTable({ pageLength: 100 });
//   // $("#infotable").DataTable({ pageLength: 100,dom: 'Bfrtip', buttons: ['print']});
//   $("#transaction_tb").DataTable(
//     { 
//       pageLength: 100,dom: 'Bfrtip', 
//       buttons: ['csv', 'excel', 'pdf', 'print'],
//       footerCallback: function (tfoot, data, start, end, display) {
//         var api = this.api();
//         $(api.column(1).footer()).html(
//           api.column(1).data().reduce( function ( a, b ) {
//             return ((a * 1) + (b * 1));
//           },0)
//         );
//       }
//     });
//   $("#adjusted_tb").DataTable({ pageLength: 100,dom: 'Bfrtip', buttons: [
//     'csv', 'excel', 'pdf', 'print'
//   ]});
//   $("#ledger_tb").DataTable({ pageLength: 100,dom: 'Bfrtip', buttons: [
//     'csv', 'excel', 'pdf', 'print'
//   ]});
//   // document.addEventListener('DOMContentLoaded', () => {
//   //    hideLoader();
//   // }, false);

//   if (loading == true) {
//     showLoader();
//   } else {
//     hideLoader();
//   }
// });

// function getFullReport(id) {
//   showLoader();
//   $.get(`${base_url}/info/fullreport/${id}`, (data) => {
//     hideLoader();
//     var tr_html = ``;
//     var  ad_html = ``;
//     var ld_html = ``;
//     var count_html = ``;
//     var daily_adjustment = ``;
//     var bet_count_transaction = ``;
//     var event_transaction = ``;

//     if (data && data.status == true) {
//       data.transaction.forEach((t) => {
//         tr_html += `<tr>
//         <td class="text-${t.type == 1 ? 'success' : t.type == 0 ? 'danger' : ''}">${t.total}</td>
//         <td class="text-${t.type == 1 ? 'success' : t.type == 0 ? 'danger' : ''}">${t.type == 1 ? 'Credit' : t.type == 0 ? 'Debit' : 'Deleted' }</td>
//         </tr>`;
//       });
//       data.adjusted.forEach((t) => {
//         ad_html += `<tr>
//         <td class="text-${t.total > 0 ? 'success' : 'danger' }">${t.total}</td>
//         </tr>`;
//       });
//       data.ledger.forEach((t) => {
//         ld_html += `<tr>
//         <td class="text-${t.total > 0 ? 'success' : 'danger' }">${t.total}</td>
//         </tr>`;
//       });
//       count_html += `<tr>
//         <td>${data.adjusted_row.length}</td>
//         <td>${data.ledger_row.length}</td>
//         </tr>`; 
//       data.daily_adjustment.forEach((t) => {
//         daily_adjustment += `<tr>
//         <td class="text-${t.amount > 0 ? 'success' : t.amount < 0 ? 'danger' : ''}">${t.amount}</td>
//         <td>${t.date}</td>
//         </tr>`;
//       }); 
//       data.bet_count_transaction.forEach((t) => {
//         bet_count_transaction += `<tr>
//         <td class="text-${t.amount > 0 ? 'success' : t.amount < 0 ? 'danger' : ''}">${t.amount}</td>
//         <td class="text-${t.type == 1 ? 'success' : t.type == 0 ? 'danger' : ''}">${t.type == 1 ? 'WIN' : 'LOSS' }</td>
//         <td>${t.bets}</td>
//         </tr>`;
//       }); 
//       data.event_transaction.forEach((t) => {
//         event_transaction += `<tr>
//         <td class="text-${t.amount > 0 ? 'success' : t.amount < 0 ? 'danger' : ''}">${t.amount}</td>
//         <td>${t.event_id}</td>
//         <td>${t.long_name}</td>
//         </tr>`;
//       });   
//     }
//     document.getElementById("full_report_tr_1").innerHTML = tr_html;
//     document.getElementById("full_report_tr_2").innerHTML = ad_html;
//     document.getElementById("full_report_tr_3").innerHTML = ld_html;
//     document.getElementById("full_report_tr_4").innerHTML = count_html;

//      document.getElementById("full_report_tr_5").innerHTML = daily_adjustment;
//       document.getElementById("full_report_tr_6").innerHTML = bet_count_transaction;
//        document.getElementById("full_report_tr_7").innerHTML = event_transaction;
//     // console.log("====>", data);
//   });
// }

// function showLoader() {
//   document.getElementById("loadingview").innerHTML = `<div class="loading-screen">
//     <div class="loading">
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </div>`
// }

// function hideLoader() {
//   document.getElementById("loadingview").innerHTML = "";
// }

// async function getCurrent(id) {
//   showLoader();
//   $.get(`${base_url}/report/value/${id}`, (data) => {
//     hideLoader();
//     if (data && data.data && data.old) {
//       document.getElementById(`bal${id}`).innerHTML = data.data.current;
//       document.getElementById(`bal_old${id}`).innerHTML = data.old.current;
//     } else {
//       document.getElementById(`bal${id}`).innerHTML = data.data.current;
//     }
//   });
// }

// // async function getUserCurrent(id) {
// //   $.get(`http://localhost:3000/report/value/${id}`, (data) => {
// //     document.getElementById(`bal${id}`).innerHTML = data.data.current;
// //   });
// // }

// function getSession(id) {
//   showLoader();
//   $.get(`${base_url}/info/session/${id}`, (data) => {
//     var tdata = "";
//     if (data.status == true) {
//       data.data.forEach((itm) => {
//         tdata += `<tr>
//           <td>CL${itm.client_id}</td>
//           <td>${formatDate(itm.date)}</td>
//           <td>${itm.ip}</td>
//           <td>${itm.device}</td>
//           <td>${itm.location}</td>
//         </tr>`;
//       });
//       var html = `<thead id="thd" class="bg-light">
//           <tr>
//             <th>Client Id</th>
//             <th>Date</th>
//             <th>Ip</th>
//             <th>Device</th>
//             <th>Location</th>
//           </tr>
//         </thead>
//         <tbody id="infotabledata">
//         ${tdata}
//         </tbody>`;
//       hideLoader();
//       document.getElementById("infotable").innerHTML = html;
//     }
//   });
// }

// function getSessionUser(id) {
//   $.get(`${base_url}/user/session/${id}`, (data) => {
//     var tdata = "";
//     if (data.status == true) {
//       data.data.forEach((itm) => {
//         tdata += `<tr>
//           <td>${itm.account_id}</td>
//           <td>${formatDate(itm.date)}</td>
//           <td>${itm.ip}</td>
//           <td>${itm.device}</td>
//           <td>${itm.location}</td>
//         </tr>`;
//       });
//       var html = `<thead id="thd" class="bg-light">
//           <tr>
//             <th>Account Id</th>
//             <th>Date</th>
//             <th>Ip</th>
//             <th>Device</th>
//             <th>Location</th>
//           </tr>
//         </thead>
//         <tbody id="userlogininfotable">
//         ${tdata}
//         </tbody>`;
//       document.getElementById("userlogininfo").innerHTML = html;
//     }
//   });
// }

// function investigate(id) {
//   showLoader();
//   $.get(`${base_url}/info/investigate/${id}`, (data) => {
//     if (data.status == true) {
//       hideLoader();
//       if (data.data) {
//         var ihtml = `
//           <div class="d-flex justify-content-between mt-2">
//             <div class="div">
//               Credit : <span class="text-success">${data.data.credit}</span>
//             </div>
//             <div class="div">
//               Debit : <span class="text-danger">${data.data.debit}</span>
//             </div>
//           </div>
//           <div class="d-flex justify-content-between mt-2">
//             <div class="div">
//               Current : <span class="text-primary">${data.data.current}</span>
//             </div>
//             <div class="div">
//               Difference : <span class="text-info">${data.data.diff}</span>
//             </div>
//           </div>
//           <div class="d-flex justify-content-between mt-2">
//             <div class="div">Valid : <span>${
//               data.data.valid == 0 ? "Invalid" : "valid"
//             }</span></div>
//           </div>
//         `;
//       }
//       if (data.data_old) {
//         var ihtml_old = `
//           <div class="d-flex justify-content-between mt-2">
//             <div class="div">
//               Credit_Old : <span class="text-success">${data.data_old.credit}</span>
//             </div>
//             <div class="div">
//               Debit_Old : <span class="text-danger">${data.data_old.debit}</span>
//             </div>
//           </div>
//           <div class="d-flex justify-content-between mt-2">
//             <div class="div">
//               Current_Old : <span class="text-primary">${data.data_old.current}</span>
//             </div>
//             <div class="div">
//               Difference_Old : <span class="text-info">${data.data_old.diff}</span>
//             </div>
//           </div>
//           <div class="d-flex justify-content-between mt-2">
//             <div class="div">Valid : <span>${
//               data.data_old.valid == 0 ? "Invalid" : "valid"
//             }</span></div>
//           </div>
//         `;
//       }
//       document.getElementById(`rep${id}`).innerHTML = ihtml;
//       document.getElementById(`rep_old${id}`).innerHTML = ihtml_old;
//     }
//   });
// }

// // function betDelete() {
// //   if (!confirm(""))
// // }
// function downloadScreenshot() {
//   let region = document.getElementById("infotable");
//   html2canvas(region, {
//     onrendered: (canvas) => {
//       let pngUrl = canvas.toDataURL();
//       var a = document.createElement("a");
//       a.href = pngUrl;
//       a.download = "client.png";
//       a.click();
//     },
//   });
// }

// function downloadUserScreenshot() {
//   let region = document.getElementById("userlogininfo");
//   html2canvas(region, {
//     onrendered: (canvas) => {
//       let pngUrl = canvas.toDataURL();
//       var a = document.createElement("a");
//       a.href = pngUrl;
//       a.download = "userinfo.png";
//       a.click();
//     },
//   });
// }

// function formatDate(date) {
//   var date = new Date(date);
//   return date.toISOString().substring(0, 10);
// }
// function formatDatev2(date) {
//   var date = new Date(date);
//   return date.toISOString().substring(0, 18);
// }


// function checkClientStatus() {
//   showLoader();
//   $.get(`${base_url}/info/scheduler`, (data) => { 
//     hideLoader();
//     console.log("data", data);
//   });
// }
