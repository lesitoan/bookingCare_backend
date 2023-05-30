import db from "../models/index";

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
                const newBooking = await db.Booking.create(data);
                resolve(newBooking);
            }
        } catch (err) {
            reject(err);
        }
    });
}


module.exports = {
    postPatientBooking,
}
