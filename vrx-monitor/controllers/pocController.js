const poc = {};
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "nodebet99",
  password: "g@@gle123414",
  database: "poc_sample",
  multipleStatements: true,
});

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "poc_sample",
//   multipleStatements: true,
// });

var groupsubform = [
  "Bank account Opened","Bank account Reactivated","Debit/credit card obtained","Debit/credit card reactivated","Debit/credit card reactivated",
  "Assistance with grievance redressal","Assistance with online banking/mobile wallets/digital payments","Brought into formal from informal sector",
  "Sensitised about mutual funds","Assisted in getting PAN card","Assisted in getting Aadhaar card","Assisted in correcting errors in Aadhaar card","Assisted in securing pensions",
  "Assisted in claiming/applying for insurance","Assisted in purchasing insurance","Assisted in securing MGNREGA wages","Assisted in securing scholarships/ government benefits"
];

// Activity

poc.participantform = async (req, res) => {
  try {
    // single
    var participants_get_query = `SELECT p.date, p.village, p.full_name, p.gender, p.guardian_name, p.age , p.occupation , p.education, p.mobile, p.monthly_household_expenditure, p.deleted, p.participants_requirement, p.subsection, block_master.name as block_name , activity_master.state as activity_state, activity_master.district as activity_district, activity_master.gram_panchayat as activity_gram_panchayat, activity_master.campaign_venue as activity_campaign_venue from participants_information as p INNER JOIN block_master ON p.block_id = block_master.id INNER JOIN activity_master ON p.activity_id = activity_master.id WHERE p.deleted = 0`;
    await getDataWithQ(participants_get_query).then(async (data) => {
      req.session.participants_list = data;
      var blocks_list = await getData("block_master", "");
      req.session.block_list = blocks_list;
      var activity_list = await getData("activity_master", "");
      req.session.activity_list = activity_list;
      res.render("participants", {
        list: req.session.participants_list,
        blocks: req.session.block_list,
        activity: req.session.activity_list,
        form: groupsubform
      });
    });
  } catch (error) {
    res.render("block", {
      list: [],
    });
  }
};

poc.participantsave = (req, res) => {
  try {
    if (req.body) {
      if (req.body.submit) {
        delete req.body.submit;
        var fullobj = [];
        groupsubform.forEach((t, k) => {
          var obj = {
            name: t,
            yesno: req.body[`yesno_${k+1}`] ? req.body[`yesno_${k+1}`] : '',
            date: req.body[`fields_date_${k+1}`] ? req.body[`fields_date_${k+1}`] : '',
            comments: req.body[`fields_coments_${k+1}`] ? req.body[`fields_coments_${k+1}`] : ''
          }
          fullobj.push(obj);
          delete req.body[`yesno_${k+1}`];
          delete req.body[`fields_date_${k+1}`];
          delete req.body[`fields_coments_${k+1}`];
        });
        req.body.subsection = JSON.stringify(fullobj);
        var saved = saveData("participants_information", req.body);
        if (saved) {
          res.redirect("/participant");
        }
      }
    }
  } catch (error) {
    res.redirect("/participant");
  }
};

poc.participantlist = async (req, res) => {
  try {
    if (req.query.id) {
      // single
      await getData("participants_information", req.query.id).then((data) => {
        req.session.activity_list = data;
        res.redirect("/participant");
      });
    }
  } catch (error) {
    res.redirect("/participant");
  }
};

// Activity

// Blocks

poc.blockform = async (req, res) => {
  try {
    // single
    await getData("block_master", "").then((data) => {
      req.session.block_list = data;
      res.render("block", {
        list: req.session.block_list,
      });
    });
  } catch (error) {
    res.render("block", {
      list: [],
    });
  }
};

poc.blocksave = (req, res) => {
  try {
    if (req.body) {
      // console.log("req.body", req.body);
      if (req.body.submit) {
        delete req.body.submit;
        var saved = saveData("block_master", req.body);
        if (saved) {
          res.redirect("/block");
        }
      }
    }
  } catch (error) {
    res.redirect("/block");
  }
};

poc.blocklist = async (req, res) => {
  try {
    if (req.query.id) {
      // single
      await getData("block_master", req.query.id).then((data) => {
        req.session.block_list = data;
        res.redirect("/block");
      });
    }
  } catch (error) {
    res.redirect("/block");
  }
};

// Blocks

// Personel Master

poc.personelmasterform = async (req, res) => {
  try {
    // single
    await getData("personel_master", "").then(async (data) => {
      if (!req.session.block_list) {
        var blocks_list = await getData("block_master", "");
        req.session.block_list = blocks_list;
        req.session.personel_list = data;
        res.render("personelmaster", {
          list: req.session.personel_list,
          blocks: req.session.block_list,
        });
      } else {
        req.session.personel_list = data;
        res.render("personelmaster", {
          list: req.session.personel_list,
          blocks: req.session.block_list,
        });
      }
    });
  } catch (error) {
    res.render("block", {
      list: [],
    });
  }
};

poc.personelmastersave = (req, res) => {
  try {
    if (req.body) {
      if (req.body.submit) {
        delete req.body.submit;
        var saved = saveData("personel_master", req.body);
        if (saved) {
          res.redirect("/personelmaster");
        }
      }
    }
  } catch (error) {
    res.redirect("/personelmaster");
  }
};

poc.personelmasterlist = async (req, res) => {
  try {
    if (req.query.id) {
      // single
      await getData("personel_master", req.query.id).then((data) => {
        req.session.personel_list = data;
        res.redirect("/personelmaster");
      });
    }
  } catch (error) {
    res.redirect("/block");
  }
};

// Personel Master

// Activity

poc.activityform = async (req, res) => {
  try {
    // single
    await getData("activity_master", "").then(async (data) => {
      req.session.activity_list = data;
      var blocks_list = await getData("block_master", "");
      req.session.block_list = blocks_list;
      var cfl_list = await getData("cfl_master", "");
      req.session.cfl_list = cfl_list;
      var ldm_list = await getData("ldm_master", "");
      req.session.ldm_list = ldm_list;
      var campaign_list = await getData("campaign_master", "");
      req.session.campaign_list = campaign_list;
      res.render("activity", {
        list: req.session.activity_list,
        blocks: req.session.block_list,
        cfl: req.session.cfl_list,
        ldm: req.session.ldm_list,
        campaign: req.session.campaign_list
      });
    });
  } catch (error) {
    res.render("activity", {
      list: [],
    });
  }
};

poc.activitysave = (req, res) => {
  try {
    if (req.body) {
      // console.log("req.body", req.body);
      if (req.body.submit) {
        delete req.body.submit;
        var saved = saveData("activity_master", req.body);
        if (saved) {
          res.redirect("/activity");
        }
      }
    }
  } catch (error) {
    res.redirect("/activity");
  }
};

poc.activitylist = async (req, res) => {
  try {
    if (req.query.id) {
      // single
      await getData("activity_master", req.query.id).then((data) => {
        req.session.activity_list = data;
        res.redirect("/activity");
      });
    }
  } catch (error) {
    res.redirect("/activity");
  }
};

// Activity

// Campaign Master

poc.campaignmasterform = async (req, res) => {
  try {
    // single
    await getData("campaign_master", "").then(async (data) => {
      req.session.campaign_list = data;
      var blocks_list = await getData("block_master", "");
      req.session.block_list = blocks_list;
      res.render("campaignmaster", {
        list: req.session.campaign_list,
        blocks: req.session.block_list,
      });
    });
  } catch (error) {
    res.render("campaignmaster", {
      list: [],
      blocks: [],
    });
  }
};

poc.campaignmastersave = async (req, res) => {
  try {
    if (req.body) {
      if (req.body.submit) {
        delete req.body.submit;
        var saved = saveData("campaign_master", req.body);
        if (saved) {
          res.redirect("/campaignmaster");
        }
      }
    }
  } catch (error) {
    res.redirect("/campaignmaster");
  }
};

poc.campaignmasterlist = async (req, res) => {
  try {
    if (req.query.id) {
      // single
      await getData("activity_master", req.query.id).then((data) => {
        req.session.activity_list = data;
        res.redirect("/campaignmaster");
      });
    }
  } catch (error) {
    res.redirect("/campaignmaster");
  }
};

// Campaign Master

// Personel
poc.personelform = async (req, res) => {
  try {
    // single
    await getData("personel_master_area_manager", "").then(async (data) => {
      var blocks_list = await getData("block_master", "");
      req.session.block_list = blocks_list;
      req.session.personels = data;
      res.render("personel", {
        list: req.session.personels,
        blocks: req.session.block_list,
      });
    });
  } catch (error) {
    res.render("personel", {
      list: [],
    });
  }
};

poc.personelsave = (req, res) => {
  try {
    if (req.body) {
      // console.log("req.body", req.body);
      if (req.body.submit) {
        delete req.body.submit;
        var saved = saveData("personel_master_area_manager", req.body);
        // console.log("saved", saved);
        if (saved) {
          res.redirect("/personel");
        }
      }
    }
  } catch (error) {
    res.redirect("/personel");
  }
};

poc.personellist = async (req, res) => {
  try {
    if (req.query.id) {
      // single
      await getData("personel_master_area_manager", req.query.id).then(
        (data) => {
          req.session.personel_list = data;
          res.redirect("/personel");
        }
      );
    }
  } catch (error) {
    res.redirect("/personel");
  }
};

// Ldm Master Form

poc.ldmmasterform = async (req, res) => {
  try {
    // single
    await getData("ldm_master", "").then(async (data) => {
      var blocks_list = await getData("block_master", "");
      req.session.block_list = blocks_list;
      req.session.ldm_master_list = data;
      res.render("ldmmaster", {
        list: req.session.ldm_master_list,
        blocks: req.session.block_list,
      });
    });
  } catch (error) {
    res.render("ldmmaster", {
      list: [],
    });
  }
};

poc.ldmmastersave = (req, res) => {
  try {
    if (req.body) {
      // console.log("req.body", req.body);
      if (req.body.submit) {
        delete req.body.submit;
        var saved = saveData("ldm_master", req.body);
        // console.log("saved", saved);
        if (saved) {
          res.redirect("/ldmmaster");
        }
      }
    }
  } catch (error) {
    res.redirect("/ldmmaster");
  }
};

poc.ldmmasterlist = async (req, res) => {
  try {
    if (req.query.id) {
      // single
      await getData("ldm_master", req.query.id).then(
        (data) => {
          req.session.personel_list = data;
          res.redirect("/ldmmaster");
        }
      );
    }
  } catch (error) {
    res.redirect("/ldmmaster");
  }
};
// Ldm Master Form


// Cfl Master Form

poc.cflmasterform = async (req, res) => {
  try {
    // single
    await getData("cfl_master", "").then(async (data) => {
      req.session.cfl_master_list = data;
      res.render("cflmaster", {
        list: req.session.cfl_master_list
      });
    });
  } catch (error) {
    res.render("cflmaster", {
      list: [],
    });
  }
};

poc.cflmastersave = (req, res) => {
  try {
    if (req.body) {
      // console.log("req.body", req.body);
      if (req.body.submit) {
        delete req.body.submit;
        var saved = saveData("cfl_master", req.body);
        // console.log("saved", saved);
        if (saved) {
          res.redirect("/cflmaster");
        }
      }
    }
  } catch (error) {
    res.redirect("/cflmaster");
  }
};

poc.cflmasterlist = async (req, res) => {
  try {
    if (req.query.id) {
      // single
      await getData("cfl_master", req.query.id).then(
        (data) => {
          req.session.personel_list = data;
          res.redirect("/cflmaster");
        }
      );
    }
  } catch (error) {
    res.redirect("/cflmaster");
  }
};

// Personel end

// @ Dynamic Save

const saveData = async (table, body) => {
  try {
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO ${table} SET ?`,
        body,
        (error, results, fields) => {
          if (error) throw error;
          // console.log(results.insertId);
          resolve(results);
        }
      );
    });
  } catch (error) {
    console.log("error", error);
    resolve(false);
  }
};

const getData = async (table, id) => {
  try {
    return new Promise((resolve, reject) => {
      if (id) {
        // Single Item
        connection.query(
          `SELECT * from ${table} where id = ${id}`,
          (error, results, fields) => {
            if (error) throw error;
            // console.log("single get", results);
            resolve(results);
          }
        );
      } else {
        // ALL List
        connection.query(
          `SELECT * from ${table} where deleted = 0`,
          (error, results, fields) => {
            if (error) throw error;
            // console.log("all get", results);
            resolve(results);
          }
        );
      }
    });
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

const getDataWithQ = async (Q) => {
  try {
    return new Promise((resolve, reject) => {
      connection.query(
        Q,
        (error, results, fields) => {
          if (error) throw error;
          resolve(results);
        }
      );
    });
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

// const editData = async (table, body, object_id) => {
//   try {
//     const query =
//       `Update ${table} SET ` +
//       Object.keys(body)
//         .map((key) => `${key} = ?`)
//         .join(", ") +
//       " WHERE id = ?";
//     const parameters = [...Object.values(body), object_id];
//     console.log("updatePortfolio: Running query:", query);
//     const [rows, meta] = await db.query(query, parameters);
//     return rows;
//   } catch (error) {
//     return false;
//   }
// };

// const updatetData = () => {
//   try {
//   } catch (error) {}
// };

// @ Dynamic Save

// const deleteData = () => {
//   try {
//   } catch (error) {}
// };

module.exports = poc;
