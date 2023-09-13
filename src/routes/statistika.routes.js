const router = require("express").Router();
const { create, find, findOne, update, remove } = require("../controllers/statistika");
const isAuth = require("../middlewares/is-auth");

router.post("/statistic", isAuth, create);
router.get("/statistic", isAuth, find);
router.get("/statistic/:id", isAuth, findOne);
router.put("/statistic/:id", isAuth, update);
router.delete("/statistic/:id", isAuth, remove);

module.exports = router;