const API_URL = "http://localhost:4200";

// Login
const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

// Crear usuario
const createUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
};

// Actualizar dispositivo
const updateDevice = async (deviceId, deviceData) => {
  try {
    const response = await fetch(`${API_URL}/devices/${deviceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deviceData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al actualizar dispositivo:', error);
    throw error;
  }
};

// Detalles usuario actual
const getUserDetails = async () => {
  try {
    const response = await fetch(`${API_URL}/me`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener detalles del usuario:', error);
    throw error;
  }
};

// Cerrar sesión
const logoutUser = async () => {
  try {
    const response = await fetch(`${API_URL}/logout`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    throw error;
  }
};

// Obtener tipos
const getTypes = async () => {
  try {
    const response = await fetch(`${API_URL}/types`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener tipos:', error);
    throw error;
  }
};

// Obtener todos los paneles
const getAllPanels = async () => {
  try {
    const response = await fetch(`${API_URL}/panels`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener todos los paneles:', error);
    throw error;
  }
};

// Obtener un panel por su ID
const getPanelById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/panels/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener el panel con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo panel
const createPanel = async (panelData) => {
  try {
    const response = await fetch(`${API_URL}/panels`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(panelData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear un nuevo panel:', error);
    throw error;
  }
};

// Actualizar un panel existente por su ID
const updatePanelById = async (id, panelData) => {
  try {
    const response = await fetch(`${API_URL}/panels/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(panelData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al actualizar el panel con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un panel por su ID
const deletePanelById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/panels/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al eliminar el panel con ID ${id}:`, error);
    throw error;
  }
};

// Obtener todos los usuarios de un panel por su ID
const getUsersByPanelId = async (panelId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener los usuarios del panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Obtener un usuario por su ID en un panel específico
const getUserByIdInPanel = async (panelId, userId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener el usuario con ID ${userId} en el panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Crear un nuevo usuario en un panel específico
const createUserInPanel = async (panelId, userData) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear un nuevo usuario en el panel:', error);
    throw error;
  }
};

// Actualizar un usuario en un panel específico por su ID
const updateUserInPanelById = async (panelId, userId, userData) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al actualizar el usuario con ID ${userId} en el panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Eliminar un usuario en un panel específico por su ID
const deleteUserInPanelById = async (panelId, userId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/users/${userId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al eliminar el usuario con ID ${userId} en el panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Obtener todos los dispositivos de un panel por su ID
const getDevicesByPanelId = async (panelId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/device`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener los dispositivos del panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Obtener todos los detalles de los dispositivos de un panel por su ID
const getFullDevicesByPanelId = async (panelId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/fulldevice`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener todos los detalles de los dispositivos del panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Obtener todas las zonas de un panel por su ID
const getZonesByPanelId = async (panelId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener las zonas del panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Irrigar una zona específica en un panel por su ID y el ID de la zona
const irrigateZone = async (panelId, zoneId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones/${zoneId}-irrigate`, {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al irrigar la zona con ID ${zoneId} en el panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Obtener los detalles de una zona específica en un panel por su ID y el ID de la zona
const getZoneByIdInPanel = async (panelId, zoneId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones/${zoneId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener los detalles de la zona con ID ${zoneId} en el panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Crear una nueva zona en un panel específico por su ID
const createZoneInPanel = async (panelId, zoneData) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zoneData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear una nueva zona en el panel:', error);
    throw error;
  }
};

// Actualizar una zona en un panel específico por su ID y el ID de la zona
const updateZoneInPanelById = async (panelId, zoneId, zoneData) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones/${zoneId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zoneData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al actualizar la zona con ID ${zoneId} en el panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Eliminar una zona en un panel específico por su ID y el ID de la zona
const deleteZoneInPanelById = async (panelId, zoneId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones/${zoneId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al eliminar la zona con ID ${zoneId} en el panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Obtener todos los dispositivos de una zona específica en un panel por su ID
const getDevicesByZoneIdInPanel = async (panelId, zoneId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones/${zoneId}/devices`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener los dispositivos de la zona con ID ${zoneId} en el panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Obtener todos los datos recientes de los dispositivos de una zona específica en un panel por su ID
const getAllRecentDeviceDataByZoneIdInPanel = async (panelId, zoneId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones/${zoneId}/devices-recent`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener los datos recientes de los dispositivos de la zona con ID ${zoneId} en el panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Obtener todo el historial de datos de los dispositivos de una zona específica en un panel por su ID
const getAllHistoryDeviceDataByZoneIdInPanel = async (panelId, zoneId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones/${zoneId}/devices-history`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener el historial de datos de los dispositivos de la zona con ID ${zoneId} en el panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Obtener los detalles de un dispositivo específico en una zona específica de un panel por sus IDs
const getDeviceDetailsByIdInZoneInPanel = async (panelId, zoneId, deviceId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones/${zoneId}/devices/${deviceId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener los detalles del dispositivo con ID ${deviceId} en la zona con ID ${zoneId} del panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Crear un nuevo dispositivo en una zona específica de un panel por sus IDs
const createDeviceInZoneInPanel = async (panelId, zoneId, deviceData) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones/${zoneId}/devices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deviceData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al crear un nuevo dispositivo en la zona con ID ${zoneId} del panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Actualizar un dispositivo en una zona específica de un panel por sus IDs
const updateDeviceInZoneInPanelById = async (panelId, zoneId, deviceId, deviceData) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones/${zoneId}/devices/${deviceId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deviceData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al actualizar el dispositivo con ID ${deviceId} en la zona con ID ${zoneId} del panel con ID ${panelId}:`, error);
    throw error;
  }
};

// Eliminar un dispositivo de una zona específica de un panel por sus IDs
const deleteDeviceInZoneInPanelById = async (panelId, zoneId, deviceId) => {
  try {
    const response = await fetch(`${API_URL}/panels/${panelId}/zones/${zoneId}/devices/${deviceId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al eliminar el dispositivo con ID ${deviceId} de la zona con ID ${zoneId} del panel con ID ${panelId}:`, error);
    throw error;
  }
};

export {  getUserDetails, logoutUser, getTypes, getAllPanels, getPanelById, createPanel, updatePanelById, deletePanelById,
  getUsersByPanelId, getUserByIdInPanel, createUserInPanel, updateUserInPanelById, deleteUserInPanelById, getDevicesByPanelId, 
  getFullDevicesByPanelId,  getZonesByPanelId, irrigateZone, getZoneByIdInPanel, createZoneInPanel, updateZoneInPanelById, 
  deleteZoneInPanelById, getDevicesByZoneIdInPanel, getAllRecentDeviceDataByZoneIdInPanel, getAllHistoryDeviceDataByZoneIdInPanel,
  getDeviceDetailsByIdInZoneInPanel, createDeviceInZoneInPanel, updateDeviceInZoneInPanelById, deleteDeviceInZoneInPanelById,};

