import { createContext, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import api from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();


  async function signIn(email, password) {
    setLoadingAuth(true);
    try {
      const response = await api.post('/login', { email, password });


      let data = response.data;

      setUser(data); 
      setLoadingAuth(false);

    } catch (err) {
      console.log("ERRO AO LOGAR", err);
      setLoadingAuth(false);
    }
  }

  async function signUp(email, password, nome) {
    setLoadingAuth(true);
    try {
      await api.post('/users', {
        name: nome,
        password: password,
        email: email,
      });

      setLoadingAuth(false);
      navigation.goBack();
    } catch (err) {
      console.log("ERRO AO CADASTRAR", err);
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user,
      user,
      signUp,
      signIn,     
      loadingAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
export { AuthContext };
