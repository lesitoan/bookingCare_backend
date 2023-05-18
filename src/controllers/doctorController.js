import doctorService from "../services/doctorService";

//-----Get top doctor home------
const getTopDoctor = async (req, res) => {
    let limit = parseInt(req.query.limit);
    if (!limit) {
        limit = 10;
    }
    try {
        const doctors = await doctorService.getTopDoctor(limit);
        return res.status(200).json(doctors);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            message: 'loi !!!!'
        })
    }
}

//-----Get all doctors------
const getAllDoctors = async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        return res.status(200).json(doctors);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            message: 'loi !!!!'
        })
    }
}

//-----Post info doctor------
const postInfoDoctor = async (req, res) => {
    try {
        const data = req.body;
        const updatedInfo = await doctorService.createInfoDoctor(data);
        return res.status(200).json(updatedInfo);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            message: 'loi !!!!'
        })
    }
}

module.exports = {
    getTopDoctor,
    getAllDoctors,
    postInfoDoctor,
}
