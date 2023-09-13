const router = require("express").Router();
const {
  create,
  find,
  findOne,
  update,
  remove,
} = require("../controllers/group.controller");
const isAuth = require("../middlewares/is-auth");

router.post("/group", isAuth, create);
router.get("/group", find);
router.get("/group/:id", findOne);
router.put("/group/:id", isAuth, update);
router.delete("/group/:id", isAuth, remove);

module.exports = router;
