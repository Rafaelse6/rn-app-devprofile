import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  border-radius: 5px;
  padding: 18px;
  margin-top: ${RFValue(16)}px;

  background-color: ${(props: { theme: { colors: { primary: string } } }) =>
    props.theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;

  font-family: ${(props: { theme: { fonts: { bold: string } } }) =>
    props.theme.fonts.bold};
  color: ${(props: { theme: { colors: { dark: string } } }) =>
    props.theme.colors.dark};
`;
