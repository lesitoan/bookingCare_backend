import patientSevrvice from "../services/patientService";

const postPatientBooking = async (req, res) => {
    try {
        const newBooking = await patientSevrvice.postPatientBooking(req.body);
        return res.status(200).json({ newBooking });
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            message: 'loi !!!!'
        })
    }
}


const verifyPatientBooking = async (req, res) => {
    try {
        const isConfirm = await patientSevrvice.verifyPatientBooking(req.query);
        return res.status(200).json({ isConfirm });
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            message: 'loi !!!!'
        })
    }
}

module.exports = {
    postPatientBooking,
    verifyPatientBooking,
}
