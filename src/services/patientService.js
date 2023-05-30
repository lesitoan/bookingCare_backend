import { v4 as uuidv4 } from 'uuid';
import db from "../models/index";
const emailService = require('../services/emailService');

const postPatientBooking = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email) {
                throw new Error('email is not define !!!');
            }


            const user = await db.User.findOne({
                where: { email: data.email },
                raw: true,
            });
            if (!user) {
                throw new Error('user is not define !!!');

            } else {
                console.log(user)
                data.token = uuidv4();
                const newBooking = await db.Booking.create(data);
                await emailService.sendSimpleEmail(data.email);
                resolve(newBooking);
            }

        } catch (err) {
            reject(err);
        }
    });
}

const verifyPatientBooking = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { token, doctorId } = data;
            if (!token || !doctorId) {
                throw new Error('token or doctorId is not define !!!');
            }
            const booking = await db.Booking.findOne({
                where: { token: token, doctorId: doctorId },
                raw: true,
            });
            console.log('booking:', booking);
            if (!booking) {
                throw new Error('Booking not found');
            } else {
                if (booking.statusId.toUpperCase() !== 'S1') {
                    throw new Error('Appointment confirmed or processed');
                }
                const [isConfirm] = await db.Booking.update({ statusId: 'S2' }, {
                    where: {
                        token: token,
                        doctorId: doctorId
                    }
                });
                console.log('isConfirm:', isConfirm);
                resolve(isConfirm);
            }

        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    postPatientBooking,
    verifyPatientBooking,
}
