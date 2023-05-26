import otherService from "../services/otherService";

//-----bulk create schedule------
const bulkCreateSchedule = async (req, res) => {
    try {
        const data = await otherService.bulkCreateSchedule(req.body);
        return res.status(200).json({ data: 'ok' });
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            message: 'loi !!!!'
        })
    }
}

//-----Get AllCode------
const handleAllCode = async (req, res) => {
    try {
        const type = req.params.type;
        const data = await otherService.getAllCode(type);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            message: err
        })
    }
}

//-----Get AllCode------
const getScheduleByDate = async (req, res) => {
    try {
        const { date, doctorId } = req.query;
        const data = await otherService.getScheduleByDate(date, doctorId);
        return res.status(200).json({ data: data });
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            message: err
        })
    }
}

module.exports = {
    bulkCreateSchedule,
    handleAllCode,
    getScheduleByDate,
}