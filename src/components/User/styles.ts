import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(100)}px;
  background-color: ${(props: { theme: { colors: { gray800: string } } }) =>
    props.theme.colors.gray800};
  border-radius: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 8px 0;
`;

export const UserDetail = styled.View``;

export const UserNameDetail = styled.View`
  margin-bottom: 16px;
`;

export const NameTitle = styled.Text`
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  color: ${(props: { theme: { colors: { light: string } } }) =>
    props.theme.colors.light};
  font-size: ${RFValue(8)}px;
  text-transform: uppercase;
`;

export const NameData = styled.Text`
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  color: ${(props: { theme: { colors: { light: string } } }) =>
    props.theme.colors.light};
  font-size: ${RFValue(14)}px;
`;

export const UserEmailDetail = styled.View``;

export const EmailTitle = styled.Text`
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  color: ${(props: { theme: { colors: { light: string } } }) =>
    props.theme.colors.light};
  font-size: ${RFValue(8)}px;
  text-transform: uppercase;
`;

export const EmailData = styled.View`
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  color: ${(props: { theme: { colors: { light: string } } }) =>
    props.theme.colors.light};
  font-size: ${RFValue(14)}px;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;
