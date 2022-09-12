import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import {
  backColor,
  green,
  iconWhite,
  iconColor,
  titleWhite,
  x,
} from "../constants";
import { Icon } from "@rneui/base";

const Contacts = ({ route, navigation }) => {
  const { text } = route.params;
  return (
    <View style={{ backgroundColor: backColor, flex: 1 }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            marginTop: 20,
          }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Icon
              name="group"
              type="material"
              iconStyle={{ color: iconWhite }}
              size={30}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: green,
                justifyContent: "center",
              }}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ color: titleWhite, fontSize: 18 }}>
              Yeni grup {text}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            marginTop: 20,
          }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Icon
              name="person-add"
              type="ionicon"
              iconStyle={{ color: iconWhite }}
              size={25}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: green,
                justifyContent: "center",
              }}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ color: titleWhite, fontSize: 18 }}>Yeni kişi</Text>
          </View>
          <Icon
            name="qr-code-outline"
            type="ionicon"
            iconStyle={{ color: iconColor }}
            size={25}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: backColor,
              justifyContent: "center",
              marginLeft: x / 2 - 20,
            }}
          />
        </View>
      </View>

      <Text
        style={{
          color: "gray",
          margin: 20,
          fontSize: 15,
        }}
      >
        WhatsApp'taki kişiler
      </Text>
      <TouchableOpacity
        activeOpacity={100}
        onPress={() => {
          navigation.navigate("Chat", { name: "Abdurrahman Abi" });
        }}
      >
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
              onPress={() => {
                Alert.alert("sd");
              }}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ color: titleWhite, fontSize: 18 }}>
              Abdurrahman Abi
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: iconColor }}>
                Merhaba! Ben WhatsApp kullanıyorum.
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={100}
        onPress={() => {
          navigation.navigate("Chat", { name: "Ali Abi" });
        }}
      >
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
              onPress={() => {
                Alert.alert("sd");
              }}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ color: titleWhite, fontSize: 18 }}>Ali Abi</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: iconColor }}>
                Merhaba! Ben WhatsApp kullanıyorum.
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={100}
        onPress={() => {
          navigation.navigate("Chat", { name: "Utku Abi" });
        }}
      >
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
              onPress={() => {
                Alert.alert("sd");
              }}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ color: titleWhite, fontSize: 18 }}>Utku Abi</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: iconColor }}>
                Merhaba! Ben WhatsApp kullanıyorum.
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Contacts;
