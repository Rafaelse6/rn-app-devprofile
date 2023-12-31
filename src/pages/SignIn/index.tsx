import React from "react";
import { ScrollView, KeyboardAvoidingView, Platform, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Form/Button/Index";
import logo from "../../assets/logo.png";
import { useForm, FieldValues } from "react-hook-form";
import { InputControl } from "../../components/Form/InputControl";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  Content,
  Title,
  Logo,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  CreateAccount,
  Icon,
  CreateAccountTitle,
} from "./styles";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "react-native";

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  email: yup.string().email("Email inválido.").required("Informe o email."),
  password: yup.string().required("Informe a senha."),
});

export const SignIn: React.FunctionComponent = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleSignIn = (form: IFormInputs) => {
    const data = {
      email: form.email,
      password: form.password,
    };

    try {
      setLoading(true);
      signIn(data);
    } catch (error) {
      Alert.alert(
        "Erro na autenticação",
        "Ocorreu um erro ao fazer login, verifique as credenciais",
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
            <View>
              <Title>Faça seu login</Title>
            </View>
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              error={errors.email && errors.email.message?.toString()}
            />
            <InputControl
              control={control}
              name="password"
              placeholder="Senha"
              autoCorrect={false}
              secureTextEntry
              error={errors.password && errors.password.message?.toString()}
            />

            <Button
              title="Entrar"
              disabled={loading || !!errors.email || !!errors.password}
              onPress={handleSubmit(handleSignIn)}
            />
            <ForgotPasswordButton onPress={() => navigate("ForgotPassword")}>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount onPress={() => navigate("SignUp")}>
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};
