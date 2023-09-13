const AuthRouter = require("./login.routes");
const GroupRouter = require("./group.routes");
const StudentRouter = require("./student.routes");
const ExamRouter = require("./exam.routes");
const StatistikaRoutes = require("./statistika.routes");
const isStudent = require("./is-student");
const StudentexamRoutes = require("./student_exam.routes");

module.exports = [AuthRouter, GroupRouter, StudentRouter, ExamRouter, StatistikaRoutes, isStudent, StudentexamRoutes];
