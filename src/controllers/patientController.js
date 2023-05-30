
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

module.exports = {
    postPatientBooking,
}
