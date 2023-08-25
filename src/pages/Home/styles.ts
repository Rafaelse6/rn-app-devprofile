import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Feather from "@expo/vector-icons/Ionicons";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: { theme: { colors: { dark: string } } }) =>
    props.theme.colors.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: ${RFValue(28)}px;
  background-color: ${(props: { theme: { colors: { secondary: string } } }) =>
    props.theme.colors.secondary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  border-radius: 10px;
`;

export const UserInfoDetail = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  font-size: ${RFValue(18)}px;

  color: ${(props: { theme: { colors: { gray800: string } } }) =>
    props.theme.colors.gray800};
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;

  color: ${(props: { theme: { colors: { gray800: string } } }) =>
    props.theme.colors.gray800};
  font-family: ${(props: { theme: { fonts: { bold: string } } }) =>
    props.theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(28)}px;
  color: ${(props: { theme: { colors: { dark: string } } }) =>
    props.theme.colors.dark};
`;
