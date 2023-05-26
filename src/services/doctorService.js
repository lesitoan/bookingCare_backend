import db from "../models/index";

const getTopDoctor = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doctors = await db.User.findAll({
                limit: limit,
                // order: [['createAt', 'DESC']],
                raw: true,
                nest: true,
                where: { roleId: 'R2' },
                include: [
                    { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                    { model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi'] }
                ],
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

const saveInfoDoctor = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { doctorId, ...doctorInfo } = data;
            if (!doctorId) {
                throw new Error('ID is null !!!');
            } else if (Object.keys(doctorInfo).length === 0) {
                throw new Error('Doctor infomation is null !!!');
            }
            const isInfoDoctor = await db.Markdown.findOne({
                where: { doctorId: doctorId },
                raw: true,
                attributes: { exclude: ['password'] }
            });
            let newInfo;
            if (isInfoDoctor) {
                newInfo = await db.Markdown.update(doctorInfo, {
                    where: {
                        doctorId: doctorId,
                    }
                });
            } else {
                newInfo = await db.Markdown.create(data)
            }
            resolve(newInfo);
        } catch (err) {
            reject(err);
        }
    });
}

const getDetailDoctor = (doctorId) => {
    return new Promise(async (resolve, reject) => {
        try {
            // if (!doctorId) {
            //     throw new Error('doctorId is not define');
            // }
            const infoDoctor = await db.User.findOne({
                raw: true,
                nest: true, // gom nhóm Markdown thành 1 key của user
                attributes: { exclude: ['password'] },
                where: { id: doctorId, roleId: 'R2' },
                include: [
                    { model: db.Markdown, attributes: ['description', 'contentMarkdown', 'contentHTML'] },
                    { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                ],
            });
            resolve(infoDoctor);
        } catch (err) {
            reject(err);
        }
    });
}



module.exports = {
    getTopDoctor,
    getAllDoctors,
    saveInfoDoctor,
    getDetailDoctor,
}
