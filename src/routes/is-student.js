const router = require("express").Router();
const { login } = require("../controllers/student-login");

router.post("/loginstudent", login);

module.exports = router;