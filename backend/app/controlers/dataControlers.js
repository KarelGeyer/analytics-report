import DataModel from "../models/DataModel.js";
import august from "../mock/august.js";
import september from "../mock/september.js"

export const getData = async (req, res) => {
    try {
        const data = await DataModel.find();
        const mock = [august, september]
        res.status(200).send([
            {
                data: data
            },
            {
                mock: mock
            }
        ])
    } catch(error) {
        res.status(404).json(error)
    }
};

export const postData = async (req, res) => {
    const data = req.body;
    const newData = new DataModel(data)

    try {
        await newData.save()
        res.status(201)
    } catch(error) {
        res.status(400).json(error)
    }
};

export const deleteData = async (req, res) => {
    const {id} = req.params
    try {
       await DataModel.findByIdAndRemove(id)
    } catch(error) {
        res.status(404).json("Data were not found")
    }
}