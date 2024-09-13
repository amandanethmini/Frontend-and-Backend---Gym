const User = require("../Model/UserModel");

// Get all users
const getAllUsers = async (req, res, next) => {
    let users;

    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "An error occurred while fetching users." });
    }

    // Not found
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found" });
    }

    // Display all users
    return res.status(200).json({ users });
};

// Add a new user
const addUsers = async (req, res, next) => {
    const { name, gmail, messages } = req.body;

    let user;

    try {
        user = new User({ name, gmail, messages });
        await user.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "An error occurred while adding the user." });
    }

    // Display the added user
    return res.status(200).json({ user });
};

// Get user by ID
const getById = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "An error occurred while fetching the user." });
    }

    // Not found
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Display the user
    return res.status(200).json({ user });
};

//update user details
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, gmail, messages } = req.body;

    let user;

    try {
        user = await User.findByIdAndUpdate(id,
            { name: name, gmail: gmail, messages: messages });
        user = await user.save();
    } catch {
        console.log(err);

    }
    // Not found
    if (!user) {
        return res.status(404).json({ message: "Unable to update user details" });
    }

    // Display the user
    return res.status(200).json({ user });

};

//detelte user
const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
    }
    // Not found
    if (!user) {
        return res.status(404).json({ message: "Unable to delete user details" });
    }

    // Display the user
    return res.status(200).json({ user });

};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
