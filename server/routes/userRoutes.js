const { register,login } = require("../controllers/usersController");

// const { addMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();

// router.post("/addmsg/", addMessage);
// router.post("/getmsg/", getMessages);

router.post("/register", register);
router.post("/login", login);


module.exports = router;