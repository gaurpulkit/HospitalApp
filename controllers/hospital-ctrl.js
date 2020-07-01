const Hospital = require('../models/hospital-model')


getPById = async (req, res) => {
    await Hospital.findOne({ _id: req.params.id }, (err, hospital) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!hospital) {
            return res
                .status(404)
                .json({ success: false, error: `hospital not found` })
        }
        return res.status(200).json({ success: true, data: hospital })
    }).catch(err => console.log(err))
}


module.exports = {
    start,
    patient,
    doctor,
    getPById,
    getDById,
}