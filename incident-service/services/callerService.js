import axios from 'axios';

const CALLER_OPERATOR_SERVICE_URL= process.env.CALLER_OPERATOR_SERVICE_URL || 'http://localhost:3001';

// Obtenir un caller
export const getCaller = async () => {
  try {
    const response = await axios.get(`${CALLER_OPERATOR_SERVICE_URL}/api/teams/available`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération d\'une équipe disponible', error);
    throw new Error('Aucune équipe disponible');
  }
};
