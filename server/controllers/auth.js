const router = require("express").Router();

async function register(req, res) {}

async function login(req, res) {}

async function logout(req, res) {}

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
