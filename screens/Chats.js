import { View, Text, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { FAB, Icon } from "@rneui/base";
import {
  backColor,
  green,
  iconColor,
  iconWhite,
  modalback,
  modalIconBack,
  titleWhite,
  topColor,
  modelIcon,
  x,
  y,
} from "../constants";
import { Modal, Portal, Provider } from "react-native-paper";

const Chats = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            // @ts-ignore
            style={{
              width: x / 1.5,
              height: x / 1.5,
              backgroundColor: modalback,
              marginHorizontal: x / 6,
              marginTop: 20,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Icon
              name="ios-person"
              type="ionicon"
              iconStyle={{
                color: modelIcon,
                alignSelf: "center",
                paddingTop: (x / 1.5 + 20) / 4,
              }}
              size={190}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 1000,
                backgroundColor: modalIconBack,
              }}
            />
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: modalback,
              }}
            >
              <Icon name="message" color={green} style={{ marginLeft: 10 }} />
              <Icon name="phone" type="material-community" color={green} />
              <Icon name="video-camera" type="font-awesome" color={green} />
              <Icon
                name="info"
                type="feather"
                color={green}
                style={{ marginRight: 10 }}
              />
            </View>
          </Modal>
        </Portal>

        <View>
          <TouchableOpacity
            activeOpacity={100}
            onPress={() => {
              navigation.navigate("Archive");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingTop: 20,
                marginLeft: 10,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  paddingBottom: 10,
                }}
              >
                <Icon
                  name="archive-outline"
                  iconStyle={{ color: iconColor, width: 25, height: 25 }}
                  type="ionicon"
                  style={{
                    width: 30,
                    height: 30,
                    marginHorizontal: 15,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: titleWhite,
                    fontSize: 16,
                    fontWeight: "bold",
                    paddingBottom: 10,
                    marginLeft: 10,
                  }}
                >
                  Arşivlenmiş
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  maxWidth: x,
                  alignItems: "flex-end",
                  marginRight: 20,
                }}
              >
                <Text
                  style={{
                    color: green,
                  }}
                >
                  1
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={100}
            onPress={() => {
              navigation.navigate("Chat", { name: "Yukatech" });
            }}
          >
            <View
              style={{
                flexDirection: "row",
                margin: 10,
              }}
            >
              <View style={{ paddingHorizontal: 5 }}>
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
                  onPress={() => {
                    showModal();
                  }}
                />
              </View>
              <View style={{ alignSelf: "center", marginLeft: 10 }}>
                <Text style={{ color: titleWhite, fontSize: 18 }}>
                  Yukatech
                </Text>
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
                  maxWidth: x,
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ color: iconColor }}>19:14</Text>
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
              <View style={{ paddingHorizontal: 5 }}>
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
                    showModal();
                  }}
                />
              </View>
              <View style={{ alignSelf: "center", marginLeft: 10 }}>
                <Text style={{ color: titleWhite, fontSize: 18 }}>
                  Utku Abi
                </Text>
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
                  maxWidth: x,
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ color: iconColor }}>19.14</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <FAB
          placement="right"
          color={green}
          icon={{ name: "message", color: "white" }}
          onPress={() => {
            navigation.navigate("Contacts", { text: "" });
          }}
        />
      </View>
    </Provider>
  );
};

export default Chats;
