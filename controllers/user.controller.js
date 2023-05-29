const db = require("../models");
const bcrypt = require("bcrypt");
exports.createUser = async (req, res) => {
  try {
    const password = bcrypt.hashSync(req.body.password, 10);
    let staff = false;
    if (req.body.userType === "Staff") {
      staff = true;
    }
    const users = await db.sequelize.models.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: password,
      userType: req.body.userType,
      createdBy: req.body.createdBy,
      createdOn: new Date(),
      staff: staff,
      stafftype: req.body.stafftype,
    });
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const users = await db.sequelize.models.User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (users) {
      const password = bcrypt.compareSync(req.body.password, users.password);
      if (password) {
        res.status(200).json({
          success: true,
          users,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Password is incorrect",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.sequelize.models.User.findAll();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
