// @ts-nocheck
import { View, Text, ImageBackground, TextInput } from "react-native";
import React from "react";
import {
  backColor,
  green,
  iconColor,
  iconWhite,
  titleWhite,
  x,
} from "../constants";
import { Icon } from "@rneui/base";

const Chat = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/wallpaper.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            borderRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: backColor,
                width: x / 1.2,
                height: 50,
                marginBottom: 5,
                marginHorizontal: 2,
                borderRadius: 50,
                flexDirection: "row",
              }}
            >
              <Icon
                name="happy"
                type="ionicon"
                color={iconColor}
                size={30}
                style={{
                  justifyContent: "center",
                  marginVertical: 10,
                  marginLeft: 10,
                }}
              />
              <TextInput
                style={{
                  margin: 10,
                  fontSize: 18,
                  color: titleWhite,
                  width: x / 2,
                }}
                placeholder="Mesaj"
                placeholderTextColor={iconColor}
              />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    name="paperclip"
                    type="font-awesome"
                    color={iconColor}
                  />
                  <Icon
                    name="camera"
                    type="font-awesome"
                    color={iconColor}
                    style={{ marginLeft: 15 }}
                    size={20}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                marginBottom: 5,
                marginHorizontal: 5,
                width: 50,
                height: 50,
                borderRadius: 100,
                backgroundColor: green,
              }}
            >
              <Icon
                name="keyboard-voice"
                type="material"
                size={30}
                color={iconWhite}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Chat;
