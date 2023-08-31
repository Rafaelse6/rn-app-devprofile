import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: { theme: { colors: { dark: string } } }) =>
    props.theme.colors.dark};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  margin-bottom: 24px;

  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  color: ${(props: { theme: { colors: { light: string } } }) =>
    props.theme.colors.light};
`;

export const Logo = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  margin-bottom: ${RFValue(64)}px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  color: ${(props: { theme: { colors: { gray500: string } } }) =>
    props.theme.colors.gray500};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${(props: { theme: { colors: { primary: string } } }) =>
    props.theme.colors.primary};
`;

export const CreateAccount = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-top-width: 1px;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-color: ${(props: { theme: { colors: { black: string } } }) =>
    props.theme.colors.black};
  background-color: ${(props: { theme: { colors: { gray800: string } } }) =>
    props.theme.colors.gray800};
`;

export const CreateAccountTitle = styled.Text`
  margin-left: 16px;
  font-size: ${RFValue(18)}px;
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  color: ${(props: { theme: { colors: { primary: string } } }) =>
    props.theme.colors.primary};
`;
