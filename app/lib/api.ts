const BASE_URL = 'https://pyronova-flame-in-freefall.vercel.app/';

const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
};

async function apiRequest(endpoint: string, options: RequestInit = {}, requiresAuth = true) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...((options.headers as Record<string, string>) || {}),
  };

  if (requiresAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}

export const authApi = {
  register: (userData: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    assigned_module: string;
  }) => apiRequest('/register', { method: 'POST', body: JSON.stringify(userData) }, false),

  verifyOtp: (verificationData: { verification_id: string; otp: string }) =>
    apiRequest('/register/verify-otp', { method: 'POST', body: JSON.stringify(verificationData) }, false),

  login: (credentials: { email: string; password: string }) =>
    apiRequest('/login', { method: 'POST', body: JSON.stringify(credentials) }, false),

  logout: () => apiRequest('/logout', { method: 'POST' }),

  forgotPassword: (email: string) =>
    apiRequest('/forgot-password', { method: 'POST', body: JSON.stringify({ email }) }, false),

  resetPassword: (resetData: {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) => apiRequest('/reset-password', { method: 'POST', body: JSON.stringify(resetData) }, false),

  getProfile: () => apiRequest('/me', { method: 'GET' }),
};

export const chatApi = {
  getChats: () => apiRequest('/chats', { method: 'GET' }),

  createChat: () => apiRequest('/chats', { method: 'POST' }),

  getChatHistory: (chatId: number) => apiRequest(`/chats/${chatId}`, { method: 'GET' }),

  askAi: (questionData: { question: string; chat_id?: number }) =>
    apiRequest('/ask', { method: 'POST', body: JSON.stringify(questionData) }),
};


export const safetyApi = {
  getGuide: () => apiRequest('/guide', { method: 'GET' }),

  simulateFire: () => apiRequest('/simulate', { method: 'POST' }),

  updateFcmToken: (fcm_token: string) =>
    apiRequest('/fcm-token', { method: 'PUT', body: JSON.stringify({ fcm_token }) }),

  resetModule: (assigned_module: string) =>
    apiRequest('/reset-module', { method: 'PUT', body: JSON.stringify({ assigned_module }) }),
};