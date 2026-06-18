import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services, setServices] = useState([]);

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
        setToken(serverToken);
    };

    // tacking the logout functionality

    console.log("token", token);

    let isLoggedIn = !!token;
    console.log("islogedin", isLoggedIn);


    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token", 0);
    }

    const userAuthentucation = async () => {
        try {
            const response = await fetch("https://web-app-8sy8.onrender.com/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            }
        } catch (error) {
            console.log("Error fetching user data");

        }
    }

    // to fetch the  service data from the database

    const getServices = async () => {
        try {

            const response = await fetch("https://web-app-8sy8.onrender.com/api/data/service", {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log("Error fetching server data");

        }
    }

    useEffect(() => {
        getServices();
        if (token) {
            userAuthentucation();
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, user, services }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}