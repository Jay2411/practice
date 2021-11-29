import React, { Component } from "react";
import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import Iconc from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-gesture-handler";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import info from "../components/data";
import style from "../components/style";

export default class vendors extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <View style={style.view1}>
            <Feather name="align-left" size={20} />
            <Text style={style.text1}>My Vendors</Text>
            <Iconc name="plussquareo" size={20} color="orange" />
          </View>
          <View style={style.view2}>
            <EvilIconsIcon name="search" size={20} color="grey" />
            <TextInput placeholder="search" style={style.textinput} />
          </View>
          <View style={style.view3} />
          <ScrollView>
            {info.map((values) => {
              return (
                <View>
                  <View style={style.view4}>
                    <Image source={values.image} style={style.image} />
                    <View>
                      <Text style={style.text2}>{values.text1}</Text>

                      <Text style={style.text3}>{values.text2}</Text>
                    </View>
                  </View>
                  <View style={style.view5} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={style.view6}>
          <View style={style.view7}>
            <Iconc name="heart" size={20} color="orange" />
            <Text style={{ color: "orange" }}>Vendors</Text>
          </View>
          <View style={style.view7}>
            <Iconc name="home" size={20} />
            <Text>Showroom</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
