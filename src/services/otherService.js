import db from "../models/index";

const bulkCreateSchedule = (schedules) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (Object.keys(schedules).length === 0 || schedules.length === 0) {
                throw new Error('data is not define !!!!');
            }
            const maxNumber = 10;
            const newSchedule = schedules.map(item => {
                item.maxNumber = maxNumber;
                return item;
            })
            console.log('newChedule: ', newSchedule);
            await db.Schedule.bulkCreate(newSchedule);
            resolve();
        } catch (err) {
            reject(err);
        }
    });
}

const getAllCode = (typeInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            if (!typeInput) {
                resolve(res);
            } else {
                res = await db.Allcode.findAll({ where: { type: typeInput } });
                resolve(res);
            }
        } catch (err) {
            reject(err);
        }
    });
}

const getScheduleByDate = (date, doctorId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!date || !doctorId) {
                throw new Error('date or doctorId is not define !!!');
            }
            console.log("---------------------")
            console.log("date:", date)
            console.log("---------------------")
            let data = await db.Schedule.findAll({
                where: { date: date, doctorId: doctorId },
            })
            if (!data) {
                data = {};
            }
            console.log("---------------------")
            console.log("date in database:", data.date)
            console.log("---------------------")
            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    bulkCreateSchedule,
    getAllCode,
    getScheduleByDate,
}