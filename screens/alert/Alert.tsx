import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../src/store";
import { Icon } from "@rneui/themed";
import tw from "twrnc";
import { StatusItemsState } from "../../src/iteminventory/slice";
import { closeAlert } from "../../src/iteminventory/slice";

const colors = new Map<string, { dark: string; light: string }>([
  [
    "warning",
    {
      dark: "#f57f17",
      light: "#fff9c4",
    },
  ],
  [
    "success",
    {
      dark: "#1b5e20",
      light: "#c8e6c9",
    },
  ],
  [
    "error",
    {
      dark: "#b71c1c",
      light: "#ffcdd2",
    },
  ],
]);

const AlertMsg = ({
  variant,
  message,
}: {
  variant: "error" | "success" | "warning";
  message: string;
}) => {
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(closeAlert());
  };
  const color = colors.get(variant);
  return (
    <TouchableOpacity
      style={[
        tw` flex flex-row justify-between items-center  rounded-md w-full`,
        {
          backgroundColor: color?.light,
        },
      ]}
      onPress={close}
    >
      <Text
        style={[
          tw`font-bold text-sm p-4`,
          {
            color: color?.dark,
          },
        ]}
      >
        {message}
      </Text>
    </TouchableOpacity>
  );
};

const Alert = ({ children }: { children: ReactNode }) => {
  const { status, message } = useAppSelector((state) => state.items);

  return (
    <>
      {children}
      {status === StatusItemsState.error && (
        <AlertMsg variant={"error"} message={message} />
      )}
      {status === StatusItemsState.offline && (
        <AlertMsg
          variant={"warning"}
          message={"Ups! Parece que no podemos contactar a nuestros servidores"}
        />
      )}
      {status === StatusItemsState.success && (
        <AlertMsg variant={"success"} message={"Genial!!!"} />
      )}
    </>
  );
};

export default Alert;
