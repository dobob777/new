const data = require('../../demo.json');

exports.singUp = async (req, res) => {
    try {
        if (data.length !== 0) {
            res.status(200).send(data);
        } else {
            res.status(404).send({ massage: "Data not found" });
        }
    } catch (error) {
        console.log('error::: ', error);
        res.status(500).send({ err: error });
    }
}