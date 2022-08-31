const express = require("express");
const router = express.Router();
router.use(express.json());
const User = require("../models/user");
//creating the user
router.post("/createUser", async (req, res) => {
  const userdata = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    username: req.body.username,
    company: req.body.company,
    country: req.body.country,
    contact: req.body.contact,
    role: req.body.role,
    plan: req.body.plan,
    status: req.body.status,
  });
  try {
    const user = await userdata.save();
    res.json({ user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

//get all the saved user
router.get("/getAllUser", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.patch("/:id", getUser, async (req, res) => {
  req.body.fullname != null ? res.user.fullname = req.body.fullname : ''
  req.body.email !=null ? res.user.email = req.body.email : ''
  req.body.username !=null ? res.user.username = req.body.username: ''
  req.body.company !=null ? res.user.company = req.body.company : ''
  req.body.country != null ? res.user.country = req.body.country : ''
  req.body.contact !=null ? res.user.contact = req.body.contact : ''
  req.body.role != null ? res.user.role = req.body.role : ''
  req.body.plan != null ? res.user.plan = req.body.plan : ''
  req.body.status != null ? res.user.status = req.body.status : ''
  try {
    const updatedUser = await res.user.save();
    res.json({ updatedUser });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
//deleting the user
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "User is deleted" });
  } catch (error) {
    res.status(500).json({ message: "internal Server error" });
  }
});

//middleware function
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
  } catch (error) {
    return res.status(500);
  }
  res.user = user;
  next();
}
module.exports = router;