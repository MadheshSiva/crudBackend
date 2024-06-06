const studentData = require("./model")
const { connect } = require("./mongoDb")

exports.createList = async (req, res) => {
    try {
        connect()
        const createData = await studentData({
            studentName: req.body.studentName,
            mark: req.body.mark,
            totalSubject: req.body.totalSubject
        })
        await createData.save()
        res.status(200).json(createData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }


}

exports.getData = async (req, res) => {
    try {
        connect()
        const getList = await studentData.find()
        res.status(200).json(getList)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


exports.updateList = async (req, res) => {
    const id = req.query.id
    try {
        connect();
        const updateData = await studentData.updateMany({ _id: id }, req.body)
        res.status(200).json(updateData)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }

}


exports.deleteList = async (req, res) => {
    const id = req.query.id
    try {
        const deleteData = await studentData.deleteOne({ _id: id })
        res.status(200).json(deleteData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }


}