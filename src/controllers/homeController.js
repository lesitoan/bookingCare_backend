import db from '../models/index';
import crudService from '../services/crudService';

const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll();
        return res.render('homePage.ejs', { data: JSON.stringify(data) });
    } catch (err) {
        console.log(err);
    }
}

const getCRUD = (req, res) => {
    return res.render('createCrud.ejs');
};

const createCRUD = async (req, res) => {
    const message = await crudService.createNewUser(req.body);
    return res.send('post done');
};

const readCRUD = async (req, res) => {
    const data = await crudService.readAllUser();
    return res.render('readCrud.ejs', { data: data })
}

const getUpdateCRUD = async (req, res) => {
    const userId = req.query.id;
    if (userId) {
        const userData = await crudService.getUserData(userId);
        return res.render('updateCrud.ejs', { data: userData });
    } else {
        return res.send('user not found');
    }
}

const postUpdateCRUD = async (req, res) => {
    const data = req.body;
    const users = await crudService.updateUserData(data)
    return res.render('readCrud.ejs', { data: users })
}

const deleteCRUD = async (req, res) => {
    const userId = req.query.id;
    const users = await crudService.deleteUser(userId);
    return res.render('readCrud.ejs', { data: users });
}

module.exports = {
    getHomePage, getCRUD, createCRUD, readCRUD, getUpdateCRUD, postUpdateCRUD, deleteCRUD
}
