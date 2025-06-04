export interface User {
  username: string;
  role: 'admin' | 'user';
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
