import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  width: 100%;
  padding: 18px 16px;
  border-radius: 5px;
  margin-bottom: 16px;
  font-size: ${RFValue(14)}px;

  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  background-color: ${(props: { theme: { colors: { gray800: string } } }) =>
    props.theme.colors.gray800};
  color: ${(props: { theme: { colors: { light: string } } }) =>
    props.theme.colors.light};
`;
