const { Router } = require("express");
const { getToDo, saveToDo } = require("../controlers/TodoControler");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);

module.exports = router;
