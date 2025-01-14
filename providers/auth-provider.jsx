import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import axios from "axios";
import useAuthStore from "../store/auth-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({
    session: null,
    mounting: true,
    user: null,
});
//! TO-DO
//* 1. review and remove the unnecessary code

export default function AuthProvider({ children }) {
    const { login, logout, setMounting } = useAuthStore();
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const [mounting, setMountingState] = useState(true);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const token = await AsyncStorage.getItem("token");
                if (token) {
                    const response = await axios.get("/api/auth/session", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const sessionData = response.data;
                    setSession(sessionData);
                    setUser(sessionData.user);
                    login(sessionData.user, sessionData);
                } else {
                    logout();
                }
            } catch (error) {
                console.error("Error fetching session:", error);
                logout();
            } finally {
                setMountingState(false);
                setMounting(false);
            }
        };

        // fetchSession();
    }, [login, logout, setMounting]);

    return (
        <AuthContext.Provider value={{ session, mounting, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);