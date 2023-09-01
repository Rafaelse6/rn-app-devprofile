import React from "react";
import { Control, Controller } from "react-hook-form";
import { Container } from "./styles";
import { TextInputProps } from "react-native";
import { Input } from "../Input";

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export const InputControl: React.FunctionComponent<Props> = ({
  control,
  name,
  ...otherProps
}) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="First name"
            onChangeText={onChange}
            value={value}
            {...otherProps}
          />
        )}
        name={name}
      />
    </Container>
  );
};
