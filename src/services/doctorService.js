import db from "../models/index";

const getTopDoctor = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doctors = await db.User.findAll({
                limit: limit,
                // order: [['createAt', 'DESC']],
                raw: true,
                nest: true,
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

const getAllDoctors = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const doctors = await db.User.findAll({
                raw: true,
                attributes: { exclude: ['password'] },
                where: { roleId: 'R2' },
            });
            resolve(doctors);
        } catch (err) {
            reject(err);
        }
    });
}

const createInfoDoctor = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { doctorId, ...doctorInfo } = data;
            if (!doctorId) {
                throw new Error('ID is null !!!');
            } else if (Object.keys(doctorInfo).length === 0) {
                throw new Error('Doctor infomation is null !!!');
            }
            const doctorUpdated = await db.Markdown.create(data)
            resolve(doctorUpdated);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    getTopDoctor,
    getAllDoctors,
    createInfoDoctor,
}
