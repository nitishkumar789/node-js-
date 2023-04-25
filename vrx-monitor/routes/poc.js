const router = require("express").Router();

const poc = require("../controllers/pocController");

router.get("/", (req, res) => {
  res.render("index");
});


router.get("/participant", poc.participantform);
router.post("/participantsinfo", poc.participantsave);
router.get("/participantsinfo", poc.participantlist);
// router.put("/participantsinfo", poc.participantupdate);
// router.delete("/participantsinfo", poc.participantdelete);

router.get("/block", poc.blockform);
router.post("/blocks", poc.blocksave);
router.get("/blocks", poc.blocklist);
// router.put("/blocks", poc.blockupdate);
// router.delete("/blocks", poc.blockdelete);


// Personel Masters Routes
router.get("/personelmaster", poc.personelmasterform);
router.post("/personelmasters", poc.personelmastersave);
router.get("/personelmasters", poc.personelmasterlist);

// Activity Routes
router.get("/activity", poc.activityform);
router.post("/activity", poc.activitysave);
router.get("/activities", poc.activitylist);

// Campaignmaster Routes
router.get("/campaignmaster", poc.campaignmasterform);
router.post("/campaignmaster", poc.campaignmastersave);
router.get("/campaignmasters", poc.campaignmasterlist);


// Personel
router.get("/personel", poc.personelform);
router.post("/personel", poc.personelsave);
router.get("/personels", poc.personellist);

// cflmaster


router.get("/cflmaster", poc.cflmasterform);
router.post("/cflmaster", poc.cflmastersave);
router.get("/cflmasters", poc.cflmasterlist);

router.get("/ldmmaster", poc.ldmmasterform);
router.post("/ldmmaster", poc.ldmmastersave);
router.get("/ldmmasters", poc.ldmmasterlist);



module.exports = router;
