import { json } from 'body-parser';
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
    return res.render('crud.ejs');
};

const postCRUD = async (req, res) => {
    const message = await crudService.createNewUser(req.body);
    console.log(message);
    return res.send('post done');
};

module.exports = {
    getHomePage, getCRUD, postCRUD
}
