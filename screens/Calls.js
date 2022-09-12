import { View, Text } from "react-native";
import React from "react";
import { green, titleWhite } from "../constants";
import { FAB } from "@rneui/base";

const Calls = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text style={{ color: "gray", fontSize: 16 }}>
        WhatsApp kullanan kişileri aramak için {"\n"}
        ekranın aldtındaki simgeye dokunun
      </Text>
      <FAB
        placement="right"
        color={green}
        icon={{
          name: "phone-plus",
          type: "material-community",
          color: "white",
        }}
        onPress={() => {
          navigation.navigate("Contacts", { text: "araması" });
        }}
      />
    </View>
  );
};

export default Calls;
