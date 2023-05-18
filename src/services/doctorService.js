import db from "../models/index";

const getTopDoctor = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doctors = await db.User.findAll({
                limit: limit,
                // order: [['createAt', 'DESC']],
                raw: true,
                // include: [
                //     { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                //     { model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi'] }
                // ],
                attributes: { exclude: ['password'] }
            });
            resolve(doctors);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    getTopDoctor,
}
