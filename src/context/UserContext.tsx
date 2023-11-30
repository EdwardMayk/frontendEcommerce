import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
    email: string;
    name: string;
    role: string;
}

interface UserContextProps {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem('user');
            return storedUser ? JSON.parse(storedUser) : null;
        }
        return null;
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (user) {
                try {
                    localStorage.setItem('user', JSON.stringify(user));
                } catch (error) {
                    console.error('Error al guardar en localStorage:', error);
                }
            } else {
                localStorage.removeItem('user');
            }
        }
    }, [user]);


    const login = (userData: User) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};


export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
