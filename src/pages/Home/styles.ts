import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: { theme: { colors: { dark: string } } }) =>
    props.theme.colors.dark};
`;

export const Title = styled.Text`
  font-family: ${(props: { theme: { fonts: { bold: string } } }) =>
    props.theme.fonts.bold};
  font-size: 24px;
  font-weight: bold;
  color: ${(props: { theme: { colors: { light: string } } }) =>
    props.theme.colors.light};
`;
