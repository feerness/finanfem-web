import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, getProfileRequest, updateProfileRequest } from "../api/auth";
import PropTypes from 'prop-types';
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    // Limpiar errores después de 5 segundos
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            if (res.status === 200) {
                setUser(res.data);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.log(error.response.data);
            setErrors(error.response.data.message);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            const accessToken = res.data.token;

            // Almacena el token en localStorage
            localStorage.setItem('token', accessToken);

            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data.message);
        }
    };

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            try {
                const res = await verifyTokenRequest(cookies.token);
                console.log("Respuesta de verifyTokenRequest:", res);

                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                setIsAuthenticated(true);
                setUser(res.data);

                console.log("Usuario autenticado en AuthContext:", res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false);
                setLoading(false);
                console.log(error);
            }
        }
        checkLogin();
    }, []);

    // Funciones de perfil
const getProfile = async () => {
    try {
        const profile = await getProfileRequest();
        setUser(profile);  // Actualizamos el estado del usuario con los datos obtenidos
        return profile;
    } catch (error) {
        console.error("Error getting profile:", error);
        throw error;
    }
};

const updateProfile = async (profileData) => {
    try {
        await updateProfileRequest(profileData);
        const refreshedProfile = await getProfile();
        setUser(refreshedProfile);  // Actualizamos el estado del usuario con los datos actualizados
        return refreshedProfile;
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
};

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                signup,
                signin,
                logout,
                isAuthenticated,
                errors,
                loading,
                getProfile, // Exponer la función getProfile en el contexto
                updateProfile, // Exponer la función updateProfile en el contexto
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;
