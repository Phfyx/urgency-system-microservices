// incident-service/services/teamService.js
import axios from 'axios';

const TEAM_SERVICE_URL = process.env.TEAM_SERVICE_URL || 'http://localhost:3002';

// Obtenir une équipe disponible
export const getAvailableTeam = async () => {
  try {
    const response = await axios.get(`${TEAM_SERVICE_URL}/api/teams/available`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération d\'une équipe disponible', error);
    throw new Error('Aucune équipe disponible');
  }
};


// Libérer une équipe après résolution d'un incident
export const releaseTeam = async (teamId) => {
  try {
    const response = await axios.patch(`${TEAM_SERVICE_URL}/api/teams/${teamId}`, {
      availability: true
    });
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la libération de l'équipe ${teamId}`, error);
    throw error;
  }
};

// Bloquer une équipe après assignation a un tache
export const blockTeam = async (teamId) => {
    try {
      const response = await axios.patch(`${TEAM_SERVICE_URL}/api/teams/${teamId}`, {
        availability: false
      });
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la libération de l'équipe ${teamId}`, error);
      throw error;
    }
};