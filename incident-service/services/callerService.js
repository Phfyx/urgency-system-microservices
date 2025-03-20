import axios from 'axios';

const CALLER_OPERATOR_SERVICE_URL= process.env.CALLER_OPERATOR_SERVICE_URL || 'http://localhost:3001';

// Obtenir un caller
export const getCallerById = async (callerId) => {
  try {
    const response = await axios.get(`${CALLER_OPERATOR_SERVICE_URL}/api/callers/${callerId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération d\'un caller', error);
    throw new Error('Ce caller n\'existe pas');
  }
};

// Obtenir un oprator
export const getOperatorById = async (operatorId) => {
    try {
        const response = await axios.get(`${CALLER_OPERATOR_SERVICE_URL}/api/operators/${operatorId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération d\'un operateur', error);
        throw new Error('Cette operateur n\'existe pas');
    }
};
