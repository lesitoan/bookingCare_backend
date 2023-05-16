import doctorService from "../../services/apiService/doctorService";

//-----Get top doctor home------
const getTopDoctorHome = async (req, res) => {
    let limit = parseInt(req.query.limit);
    if (!limit) {
        limit = 10;
    }
    try {
        console.log(limit)
        const doctors = await doctorService.getTopDoctorHome(limit);
        return res.status(200).json(doctors);
    } catch (e) {
        return res.status(200).json({
            message: 'loi !!!!'
        })
    }
}

module.exports = {
    getTopDoctorHome,
}
