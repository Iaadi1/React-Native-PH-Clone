import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import UIButton from "../components/UIButton";

const LogIn = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ marginVertical: "10%" }}
            resizeMode="contain"
            source={require("..//assets/images/pizza_hut_logo.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 700,
              fontStyle: "normal",
              marginVertical: 20,
            }}
          >
            Welcome !
          </Text>
          <Text style={{ fontSize: 15, textTransform: "capitalize" }}>
            Provide your login information to use our application.
          </Text>
        </View>
        <View>
          <View>
            <Text>Email</Text>
            <TextInput style={{ borderWidth: 1 }} />
          </View>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Password</Text>
              <Pressable
                onPress={() =>
                  alert("Forgot Password is Yet To be Implemented")
                }
              >
                <Text>Forgot Paassword</Text>
              </Pressable>
            </View>
            <TextInput style={{ borderWidth: 1 }} />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <UIButton title="Login" />
          <View style={{flexDirection:"row"}}>
          <Text>Do not Have Account ?</Text>
          <Pressable>
            <Text>Create Account</Text>
          </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LogIn;
