
// Define types for auth state
export interface User {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export interface Session {
  user: User;
  timestamp: string;
}

// Function to check if user is logged in
export const checkUserSession = (): Session | null => {
  const userSession = localStorage.getItem('userSession');
  
  if (!userSession) return null;
  
  try {
    const sessionData = JSON.parse(userSession) as Session;
    const sessionDate = new Date(sessionData.timestamp);
    const now = new Date();
    const monthInMs = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
    
    if (now.getTime() - sessionDate.getTime() < monthInMs) {
      return sessionData;
    } else {
      // Session expired, remove it
      localStorage.removeItem('userSession');
      return null;
    }
  } catch (error) {
    console.error('Error parsing user session:', error);
    localStorage.removeItem('userSession');
    return null;
  }
};

// Function to create a user session
export const createUserSession = (user: User): void => {
  const session: Session = {
    user,
    timestamp: new Date().toISOString(),
  };
  
  localStorage.setItem('userSession', JSON.stringify(session));
};

// Function to end user session
export const endUserSession = (): void => {
  localStorage.removeItem('userSession');
};
