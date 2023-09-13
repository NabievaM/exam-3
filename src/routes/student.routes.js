const router = require("express").Router();
const { create, find, findOne, update, remove, login } = require("../controllers/student.controller");
const isAuth = require("../middlewares/is-auth");

router.post("/student", isAuth, create);
router.get("/student", find);
router.get("/student/:id", findOne);
router.put("/student/:id", isAuth, update);
router.delete("/student/:id", isAuth, remove);

module.exports = router;