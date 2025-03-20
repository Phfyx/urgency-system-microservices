import { createOperator, getAllOperators, getOperatorById } from "../repositories/operatorRepository.js";


export const createNewOperator = async (req, res) => {
    try {
        const { name } = req.body

        const newOperator = await createOperator(name);

        res.status(200).json({ message: "Operator create with sucess", operator: newOperator })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getOperators = async (req, res) => {
    try {
        const operators = await getAllOperators();
        res.status(200).json(operators)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getOperatorById = async (req, res) => {
    try {
        const { id } = req.params
        const operator = await getOperatorById(id);
        res.status(200).json(operator)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
