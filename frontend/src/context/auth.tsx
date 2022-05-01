import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from "../services/auth";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

export const authContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem("ABAuth:user");
      const storagedToken = await AsyncStorage.getItem("ABAuth:token");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        // api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);

    // api.defaults.headers = `Bearer ${response.token}`

    //Salvando usuário e token no local storage
    try {
      await AsyncStorage.multiSet([
        ["ABAuth:user", JSON.stringify(response.user)],
        ["ABAuth:token", response.token],
      ]);
    } catch (err) {
      console.log(err);
    }
  }

  async function signOut() {
    setUser(null);
    await AsyncStorage.clear();
  }

  return (
    <authContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </authContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(authContext);
  return context;
}
