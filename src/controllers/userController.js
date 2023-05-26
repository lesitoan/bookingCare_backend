
import userService from "../services/userService";

//-----check user login-----
const handleLoginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    let data = {};
    if (!email || !password) {
        data.status = -1;
        data.user = [];
    } else {
        data = await userService.checkUserLogin(email, password);
    }
    return res.status(200).json(data);
}

//-----get user or all users------
const handleGetUser = async (req, res) => {
    const id = req.params.id;
    const data = await userService.getUser(id);
    return res.status(200).json(data);
}

//-----update user------
const handleUpdateUser = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const isUpdate = await userService.updateUser(id, data);
    return res.status(200).json({ message: isUpdate });
}

//-----create user------
const handleCreateUser = async (req, res) => {
    const data = req.body;
    const newUser = await userService.createUser(data);
    return res.status(200).json(newUser);
}

//-----Delete user------
const handleDeleteUser = async (req, res) => {
    const id = req.params.id;
    const isDeleteUser = await userService.deleteUser(id);
    return res.status(200).json({ message: isDeleteUser });
}




module.exports = {
    handleLoginUser,
    handleGetUser,
    handleUpdateUser,
    handleCreateUser,
    handleDeleteUser,
}
