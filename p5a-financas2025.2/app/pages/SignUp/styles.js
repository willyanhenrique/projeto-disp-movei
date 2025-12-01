import styled from "styled-components/native";

export const BackGround = styled.View`
  flex: 1;
  background-color: #eef2ff; /* azul claro */
  justify-content: center;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
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
  background-color: #3b3dbf;
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
