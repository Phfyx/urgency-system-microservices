import { createOperator, getAllOperators, getOperatorById } from "../repositories/operatorRepository.js";
import OperatorDto from "../dtos/operatorDto.js";

export const createNewOperator = async (req, res) => {
    try {

        const operatorDto = new OperatorDto(req.body);

        const newOperator = await createOperator({
            name: operatorDto.name,
        });

        const responseDto = new OperatorDto({
            id: newOperator._id,
            name: newOperator.name,
        });

        res.status(201).json({ message: "Operator created with sucess", responseDto })
    } catch (err) {
        if (err.message.includes("required")) {
            res.status(400).json({ error: err.message })
        }
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getOperators = async (req, res) => {
    try {
        const operators = await getAllOperators();
        const operatorsDtos = operators.map(operator => new OperatorDto({
            id: operator._id,
            name: operator.name,
        }));

        res.status(200).json(operatorsDtos)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getOperator = async (req, res) => {
    try {
        const operator = await getOperatorById(req.params.id);

        if (!operator) {
            return res.status(404).json({ error: "Operator not found" })
        }

        const operatorDto = new OperatorDto({
            id: operator._id,
            name: operator.name,
        });

        res.status(200).json(operatorDto)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
