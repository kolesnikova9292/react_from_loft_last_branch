import React, { useState } from "react";
const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [isAuthorized, setisAuthorized] = useState(false);

  const loginContext = () => {
    setisAuthorized(true);
  };

  const logout = () => {
    setisAuthorized(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        loginContext: loginContext,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };
