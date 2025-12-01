import styled from "styled-components/native";

export const BackGround = styled.View`
  flex: 1;
  background-color: #eef2ff; /* azul bem clarinho */
  justify-content: center;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 180px;
  height: 180px;
  margin-bottom: 40px;
`;

export const AreaInput = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #3b3dbf;  /* azul do botão */
  padding: 15px;
  border-radius: 8px;
  
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 15px;
`;

export const LinkText = styled.Text`
  color: #3b3dbf;
  font-size: 15px;
  text-decoration: underline;
`;
