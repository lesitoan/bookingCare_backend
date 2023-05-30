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

//-----Post info doctor table markdown------
const postInfoDoctorMarkdown = async (req, res) => {
    try {
        const data = req.body;
        const updatedInfo = await doctorService.saveInfoDoctorMarkdown(data);
        return res.status(200).json(updatedInfo);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            message: 'loi !!!!'
        })
    }
}

//-----Post info doctor table doctorinfor------
const postInfoDoctorExtra = async (req, res) => {
    try {
        const data = req.body;
        const updatedInfo = await doctorService.saveInfoDoctorExtra(data);
        return res.status(200).json(updatedInfo);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            message: 'loi !!!!'
        })
    }
}

//-----Get detail doctor------
const getDetailDoctor = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const infoDoctor = await doctorService.getDetailDoctor(doctorId);
        return res.status(200).json(infoDoctor);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            message: 'loi !!!!'
        })
    }
}

//-----Get detail doctor------
const getDoctorInforExtra = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const infoDoctorExtra = await doctorService.getDoctorInforExtra(doctorId);
        return res.status(200).json(infoDoctorExtra);
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
    postInfoDoctorMarkdown,
    getDetailDoctor,
    postInfoDoctorExtra,
    getDoctorInforExtra,
}
