import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: { theme: { colors: { dark: string } } }) =>
    props.theme.colors.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;
  font-size: 24px;
  background-color: ${(props: { theme: { colors: { secondary: string } } }) =>
    props.theme.colors.secondary};
`;
