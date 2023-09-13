const router = require("express").Router();
const { create, find, update, remove } = require("../controllers/exam.controller");
const isAuth = require("../middlewares/is-auth");

router.post("/exam", isAuth, create);
router.get("/exam", find);
router.put("/exam/:id", isAuth, update);
router.delete("/exam/:id", isAuth, remove);

module.exports = router;