import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import { AuthContext } from "../../context/auth";

import {
  BackGround,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from "./styles";

export default function SignIn({ navigation }) {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    signIn(email, password);  
  }

  return (
    <BackGround>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : ""}
        enabled
      >
        <Logo
          source={require("../../../assets/Logo.png")}
          resizeMode="contain"
        />

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

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar uma conta gratuita</LinkText>
        </Link>
      </Container>
    </BackGround>
  );
  <SignUpButton onPress={() => navigation.navigate("SignUp")}>
  <SignUpText>Criar uma conta</SignUpText>
</SignUpButton>

}
