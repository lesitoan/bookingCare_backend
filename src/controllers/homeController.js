import db from '../models/index';
import crudService from '../services/crudService';

const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll();
        console.log(data)
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
    console.log(message);
    return res.send('post done');
};

const readCRUD = async (req, res) => {
    const data = await crudService.readAllUser();
    console.log(data);
    return res.render('readCrud.ejs', { data: data })
}

module.exports = {
    getHomePage, getCRUD, createCRUD, readCRUD
}
