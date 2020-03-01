import React, { useState } from "react";
import axios from "axios";
const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [isAuthorized, setisAuthorized] = useState(
    localStorage.getItem("accessToken") === null ? false : true
  );

  const loginContext = async (login, password) => {
    const response = await axios.post(
      "https://loft-taxi.glitch.me/auth",
      { email: login, password: password },
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.data.success === true) {
      setisAuthorized(true);
    }
    return response.data;
  };

  const logout = () => {
    setisAuthorized(false);
  };

  const registration = async (login, password, firstname, lastname) => {
    const response = await axios.post(
      "https://loft-taxi.glitch.me/register",
      { email: login, password: password, name: firstname, surname: lastname },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.data.success === true) {
      setisAuthorized(true);
    }
    return response.data;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        loginContext: loginContext,
        logout: logout,
        registration: registration,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };
