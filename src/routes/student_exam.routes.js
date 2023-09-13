const router = require("express").Router();
const { create, find } = require("../controllers/student_exam");
const isStudent = require("../middlewares/is-student");
const isAuth = require("../middlewares/is-auth");

router.post("/studentExam", isStudent, create);
router.get("/student/exam", isStudent || isAuth, find);

module.exports = router;