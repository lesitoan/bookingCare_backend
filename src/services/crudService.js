import bcrypt from 'bcryptjs';
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (err) {
            reject(err);
        }
    })
};

const createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const password = data.password;
            const hashPassword = await hashUserPassword(password);
            const newUser = {
                email: data.email,
                password: hashPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId
            }
            await db.User.create(newUser);
            resolve('create new user successfully !!!');
        } catch (err) {
            reject(err);
        }
    })
}

const readAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await db.User.findAll({ raw: true });
            resolve(users);
        } catch (err) {
            reject(err);
        }
    })
}

const getUserData = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({ where: { id: userId }, raw: true });
            if (user) {
                resolve(user);
            } else {
                resolve('khong tim thay user !!!');
            }
        } catch (err) {
            reject(err);
        }
    })
}

const updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({ where: { id: data.id }, raw: true });
            if (user) {
                await db.User.update({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                },
                    {
                        where: {
                            id: data.id
                        }
                    });
                const users = await db.User.findAll({ raw: true });
                resolve(users);
            } else {
                resolve();
            }
        } catch (err) {
            reject(err);
        }
    })
}

const deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({ where: { id: userId }, raw: true });
            if (user) {
                await db.User.destroy({
                    where: {
                        id: userId
                    }
                });
                const users = await db.User.findAll({ raw: true });
                resolve(users);
            } else {
                resolve('khong tim thay user !!!');
            }
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    createNewUser, readAllUser, getUserData, updateUserData, deleteUser
}