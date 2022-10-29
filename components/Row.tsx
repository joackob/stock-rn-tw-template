import React, { ReactNode } from "react";
import { View } from "react-native";
import tw from "twrnc";

const Row = ({
  children,
  className,
}: {
  children?: ReactNode | ReactNode[];
  className?: string;
}) => {
  return (
    <View style={tw`flex flex-row items-center ${className ?? ""}`}>
      {children}
    </View>
  );
};

export default Row;
