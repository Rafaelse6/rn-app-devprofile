import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: { theme: { colors: { dark: string } } }) =>
    props.theme.colors.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(16)}px;
  background-color: ${(props: { theme: { colors: { secondary: string } } }) =>
    props.theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(48)}px ${RFValue(24)}px ${RFValue(8)}px;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-right: ${RFValue(16)}px;
`;

export const Icon = styled(Feather)`
  color: ${(props: { theme: { colors: { gray800: string } } }) =>
    props.theme.colors.gray800};
`;

export const HeaderTile = styled.Text`
  color: ${(props: { theme: { colors: { gray800: string } } }) =>
    props.theme.colors.gray800};
  font-size: ${RFValue(18)}px;
  font-family: ${(props: { theme: { fonts: { bold: string } } }) =>
    props.theme.fonts.bold};
  font-weight: bold;
`;

export const PhotoContainer = styled.View``;

export const UserAvatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
  margin-left: auto;
`;

export const PhotoButton = styled.View``;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
  padding: ${RFValue(48)}px ${RFValue(24)}px;
`;

export const UserNameDetail = styled.View`
  background-color: ${(props: { theme: { colors: { gray800: string } } }) =>
    props.theme.colors.gray800};
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  border-radius: 10px;
`;

export const NameTitle = styled.Text`
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${(props: { theme: { colors: { light: string } } }) =>
    props.theme.colors.light};
  text-transform: uppercase;
`;

export const NameData = styled.Text`
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  color: ${(props: { theme: { colors: { primary: string } } }) =>
    props.theme.colors.primary};
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;
`;

export const UserEmailDetail = styled.View`
  background-color: ${(props: { theme: { colors: { gray800: string } } }) =>
    props.theme.colors.gray800};
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  border-radius: 10px;
`;

export const EmailTitle = styled.Text`
  color: ${(props: { theme: { colors: { light: string } } }) =>
    props.theme.colors.light};
  font-size: ${RFValue(12)}px;
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  text-transform: uppercase;
`;

export const EmailData = styled.Text`
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  color: ${(props: { theme: { colors: { primary: string } } }) =>
    props.theme.colors.primary};
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;
`;
