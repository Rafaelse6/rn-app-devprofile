import React from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Form/Button/Index";
import logo from "../../assets/logo.png";
import { InputControl } from "../../components/Form/InputControl";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import {
  Container,
  Content,
  GoBackButton,
  Header,
  HeaderTile,
  HeaderTop,
  Icon,
  Logo,
  PhotoContainer,
  Title,
  UserAvatar,
} from "./styles";
import { useAuth } from "../../context/AuthContext";
import avatarDefault from "../../assets/avatar02.png";

interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  name: yup.string().required("Informe o noem completo"),
  email: yup.string().email("Email inválido.").required("Informe o email."),
});

export const UserProfileEdit: React.FunctionComponent = () => {
  const { user } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const { goBack } = useNavigation<ScreenNavigationProp>();

  const handleProfileEdit = async (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
    };

    try {
      await api.put("profile", data);
      Alert.alert(
        "Perfil atualizado",
        "Os dados do seu perfil foram atualizados",
      );
      goBack();
    } catch (error) {
      Alert.alert(
        "Erro ao atualizar",
        "Ocorreu um erro ao atualizar o perfil. Tente novamente.",
      );
    }
  };
  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Header>
            <HeaderTop>
              <GoBackButton onPress={goBack}>
                <Icon name="chevron-left" />
              </GoBackButton>
              <HeaderTile>Seu Perfil</HeaderTile>
            </HeaderTop>

            <PhotoContainer>
              <UserAvatar
                source={
                  user.avatar_url ? { uri: user.avatar_url } : avatarDefault
                }
              />
            </PhotoContainer>
          </Header>
          <Content>
            <Logo source={logo} />
            <Title>Editar dados do perfil</Title>
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="name"
              placeholder="Nome completo"
              error={errors.name && errors.name.message?.toString()}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              error={errors.email && errors.email.message?.toString()}
            />

            <Button title="Entrar" onPress={handleSubmit(handleProfileEdit)} />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
