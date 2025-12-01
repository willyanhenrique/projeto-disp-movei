import React, { useContext, useState } from "react";
import { Platform } from "react-native";

import { AuthContext } from "../../context/auth";

import {
  BackGround,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText
} from "./styles";

export default function SignUp({ navigation }) {

  const { signUp, loadingAuth } = useContext(AuthContext);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <BackGround>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : ""}
        enabled
      >

        <AreaInput>
          <Input
            placeholder="Seu nome"
            value={nome}
            onChangeText={setNome}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>
            {loadingAuth ? "Carregando..." : "Cadastrar"}
          </SubmitText>
        </SubmitButton>

      </Container>
    </BackGround>
  );
  
}
