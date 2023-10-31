import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: { theme: { colors: { dark: string } } }) =>
    props.theme.colors.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(28)}px;
  background-color: ${(props: { theme: { colors: { secondary: string } } }) =>
    props.theme.colors.secondary};
`;

export const HeaderTop = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(48)}px ${RFValue(24)}px ${RFValue(8)}px;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-right: ${RFValue(16)}px;
`;

export const HeaderTile = styled.Text`
  color: ${(props: { theme: { colors: { gray800: string } } }) =>
    props.theme.colors.gray800};
  font-size: ${RFValue(18)}px;
  font-family: ${(props: { theme: { fonts: { bold: string } } }) =>
    props.theme.fonts.bold};
  font-weight: bold;
`;

export const PhotoContainer = styled.View`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 10px;
  margin: ${RFValue(48)}px auto;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 10px;
  margin-left: auto;
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

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${(props: { theme: { colors: { primary: string } } }) =>
    props.theme.colors.primary};
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props: { theme: { colors: { gray800: string } } }) =>
    props.theme.colors.gray800};
  border-top-width: 1px;
  border-color: ${(props: { theme: { colors: { black: string } } }) =>
    props.theme.colors.black};
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${(props: { theme: { fonts: { regular: string } } }) =>
    props.theme.fonts.regular};
  color: ${(props: { theme: { colors: { primary: string } } }) =>
    props.theme.colors.primary};
  margin-left: 16px;
`;
