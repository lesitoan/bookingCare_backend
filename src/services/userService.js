import bcrypt from 'bcryptjs';
import db from "../models/index";

const checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: { email: email },
                raw: true,
            });
            if (user) {
                resolve({ isUser: true, user: user });
            } else {
                resolve({ isUser: false });
            }
        } catch (err) {
            reject(err);
        }
    });
}

const checkUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = {};
            const checkUser = await checkUserEmail(email);
            if (checkUser.isUser) {
                const user = checkUser.user;
                const passworded = user.password;
                const checkPassword = await bcrypt.compareSync(password, passworded);
                if (!checkPassword) {
                    data.status = 0;
                    data.user = [];
                } else {
                    data.status = 1;
                    data.user = user;
                }
            } else {
                data.status = 0;
                data.user = [];
            }
            delete data.user.password;
            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
};

const hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (err) {
            reject(err);
        }
    })
};

const createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { email, password, firstName, lastName } = data;
            let newUser = {};
            if (password && email && firstName && lastName) {
                const hashPassword = await hashUserPassword(password);
                data.password = hashPassword;
                newUser = await db.User.create(data);
                newUser.password = "*********";
            }
            resolve(newUser);
        } catch (err) {
            reject(err);
        }
    })
}

const getUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data;
            if (!id) {
                data = await db.User.findAll({
                    raw: true,
                    attributes: { exclude: ['password'] } // no export password
                });
            } else {
                data = await db.User.findOne({
                    where: { id: id },
                    raw: true,
                    attributes: { exclude: ['password'] }
                });
            }
            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
}

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { firstName, lastName, address, phonenumber } = data;
            const [user] = await db.User.update({ firstName, lastName, address, phonenumber }, {
                where: {
                    id: id
                }
            });
            resolve(user);
        } catch (err) {
            reject(err);
        }
    });
}

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const isDeleteUser = await db.User.destroy({ where: { id: id } });
            resolve(isDeleteUser);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    checkUserLogin,
    getUser,
    updateUser,
    createUser,
    deleteUser,
}
