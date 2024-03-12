import { ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  async function login(email, password) {
    try {
      setAuthLoading(true);
      const loggedIn = await account.createEmailSession(email, password);
      await init();
      setAuthLoading(false);
    } catch (error) {
      // console.log(error);
      setInvalidCredentials(true);
      setAuthLoading(false);
    }
  }

  async function logout() {
    setAuthLoading(true);
    await account.deleteSession("current");
    setUser(null);
    setAuthLoading(false);
  }

  async function register(email, password) {
    setAuthLoading(true);
    await account.create(ID.unique(), email, password);
    await login(email, password);
    setAuthLoading(false);
  }

  async function init() {
    try {
      console.log("userinit");
      setAuthLoading(true);
      const loggedIn = await account.get();
      setUser(loggedIn);

      setAuthLoading(false);
    } catch (err) {
      setUser(null);
      setAuthLoading(false);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider
      value={{
        current: user,
        getUser: init,
        login,
        logout,
        register,
        authLoading,
        invalidCredentials,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
