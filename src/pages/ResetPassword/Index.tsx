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
  BackToSignIn,
  BackToSignInTitle,
  Container,
  Content,
  Icon,
  Logo,
  Title,
} from "./styles";

interface ScreenNavigationProp {
  goBack: () => void;
  navigate(screen: string): void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  token: yup.string().uuid("Código inválido.").required("Informe o código."),
  password: yup.string().required("Informe a nova senha."),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Confirmação incorreta"),
});

export const ResetPassword: React.FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const { goBack, navigate } = useNavigation<ScreenNavigationProp>();

  const handleResetPassword = async (form: IFormInputs) => {
    const data = {
      token: form.token,
      password: form.password,
      password_confirmation: form.password_confirmation,
    };

    try {
      await api.post("password/reset", data);
      Alert.alert(
        "Senha redefinida",
        "A senha foi redefinida com sucesso. Efetue o login para acessar",
      );
      navigate("SignIn");
    } catch (error) {
      Alert.alert(
        "Erro ao resetar senha",
        "Ocorreu um erro ao resetar sua senha, tente novamente",
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
          <Content>
            <Logo source={logo} />
            <Title>Redefinir a Senha</Title>
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="token"
              placeholder="Código"
              error={errors.token && errors.token.message?.toString()}
            />
            <InputControl
              control={control}
              name="password"
              placeholder="Senha"
              autoCorrect={false}
              secureTextEntry
              error={errors.password && errors.password.message?.toString()}
            />
            <InputControl
              control={control}
              name="password_confirmation"
              placeholder="Senha"
              autoCorrect={false}
              secureTextEntry
              error={
                errors.password_confirmation &&
                errors.password_confirmation.message?.toString()
              }
            />

            <Button
              title="Redefinir Senha"
              onPress={handleSubmit(handleResetPassword)}
            />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => goBack()}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar para logon</BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};
