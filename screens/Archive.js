import { View, Text } from "react-native";
import React from "react";
import { FAB, Icon } from "@rneui/base";
import {
  backColor,
  green,
  iconColor,
  iconWhite,
  titleWhite,
  topColor,
  x,
} from "../constants";
import { StatusBar } from "expo-status-bar";
const Archive = () => {
  return (
    <View style={{ flex: 1, backgroundColor: backColor }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
          }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Icon
              name="group"
              type="material"
              iconStyle={{ color: iconWhite }}
              size={40}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: iconColor,
                justifyContent: "center",
              }}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ color: titleWhite, fontSize: 18 }}>Yukatech</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: iconColor, marginRight: 5 }}>
                Utku Abi:
              </Text>
              <Text style={{ color: iconColor }}>İyi akşamlar</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 10,
              maxWidth: x,
              alignItems: "flex-end",
            }}
          >
            <Text style={{ color: iconColor }}>19.14</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
          }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Icon
              name="ios-person"
              type="ionicon"
              iconStyle={{
                color: iconWhite,
                alignSelf: "center",
                marginTop: 5,
              }}
              size={40}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: iconColor,
              }}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ color: titleWhite, fontSize: 18 }}>Utku Abi</Text>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="checkmark"
                type="ionicon"
                color={iconColor}
                size={20}
                style={{ justifyContent: "center" }}
              />
              <Text style={{ color: iconColor }}>İyi akşamlar</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 10,
              maxWidth: x,
              alignItems: "flex-end",
            }}
          >
            <Text style={{ color: iconColor }}>19.14</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Archive;
