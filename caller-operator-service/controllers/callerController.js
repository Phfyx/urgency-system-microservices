import { createCaller, getAllCallers, getCallerById } from '../repositories/callerRepository.js';
import CallerDto from '../dtos/callerDto.js';


export const createNewCaller = async (req, res) => {
    try {
        const callerDto = new CallerDto(req.body);

        const newCaller = await createCaller({
            name: callerDto.name,
            phone: callerDto.phone,
        });

        const responseDto = new CallerDto({
            id: newCaller._id,
            name: newCaller.name,
            phone: newCaller.phone,
        });

        res.status(201).json({ message: "Caller created with sucess", responseDto })
    } catch (err) {
        if (err.message.includes("required")) {
            res.status(400).json({ error: err.message })
        }
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getCallers = async (req, res) => {
    try {
        const callers = await getAllCallers();

        const callersDtos = callers.map(caller => new CallerDto({
            id: caller._id,
            name: caller.name,
            phone: caller.phone,
        }));

        res.status(200).json(callersDtos)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getCaller= async (req, res) => {
    try {
        const caller = await getCallerById(req.params.id);
        if (!caller) {
            return res.status(404).json({ error: "Caller not found" })
        }

        const callerDto = new CallerDto({
            id: caller._id,
            name: caller.name,
            phone: caller.phone,
        });

        res.status(200).json(callerDto)
    } catch (err) {
        res.status(500).json({ error: "Internal server error" })
    }
}