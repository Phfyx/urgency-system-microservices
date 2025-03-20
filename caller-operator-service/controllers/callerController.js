import { createCaller, getAllCallers } from '../repositories/callerRepository.js';
import CallerDto from '../dtos/callerDto.js';


export const createNewCaller = async (req, res) => {
    try {
        const { name, phone } = req.body

        const newCaller = await createCaller({name,phone});

        res.status(200).json({ message: "Caller create with sucess", caller: newCaller })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getCallers = async (req, res) => {
    try {
        const callers = await getAllCallers();
        res.status(200).json(callers)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getCallerById = async (req, res) => {
    try {
        const { id } = req.params
        const caller = await getCallerById(id);
        res.status(200).json(caller)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}