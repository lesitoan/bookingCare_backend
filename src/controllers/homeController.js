import { json } from 'body-parser';
import db from '../models/index';

const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll();
        console.log(data)
        return res.render('homePage.ejs', { data: JSON.stringify(data) });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getHomePage
}
