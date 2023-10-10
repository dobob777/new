
const User = require('../schema/users');

exports.list = async (req, res) => {
    try {
        const abc = await User.find({});
        res.status(200).send({ data: abc });
    } catch (error) {
        console.log('error::: ', error);
        res.status(500).send({ err: error });
    }
}

exports.login = async (req, res) => {
    try {
        const addData = await User.create({
            name: req.body.new_name,
            phone: req.body.new_phone,
            comment: req.body.new_comments
        });
        res.status(201).send({ success: addData });
    } catch (error) {
        console.log('error::: ', error);
        res.status(500).send({ err: error });
    }
}

exports.deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        const del = await User.findByIdAndDelete(id)
        // const del = await User.findByIdAndRemove(id);
        res.status(200).send({ massage: "Data deleted..." })
    } catch (error) {
        console.log('error::: ', error);
        res.status(500).send({ err: error });
    }
}