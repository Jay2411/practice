import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    view1:{
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: "5%",
        paddingHorizontal: 15,
      },
      text1:{ fontWeight: "bold", fontSize: 20 },
      view2:{
        flexDirection: "row",
        borderRadius: 7,
        backgroundColor: "#ededed",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 35,
        marginTop: "5%",
        marginHorizontal: 15,
      },
      textinput:{
        marginLeft: "2%",
      },
      view3:{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "100%",
        marginTop: "5%",
        marginBottom: "5%",
      },
      view4:{
        flexDirection: "row",
        marginTop: "5%",
        paddingHorizontal: 15,
      },
      image:{ width: 45, height: 45, borderRadius: 35 },
      text2:{
        marginLeft: "5%",
        fontWeight: "bold",
        fontSize: 15,
      },
      text3:{
        fontSize: 12,
        marginLeft: "5%",
        opacity: 0.5,
      },
      view5:{
        borderBottomColor: "black",
        borderBottomWidth: 0.2,
        width: "80%",
        marginTop: "5%",
        marginLeft: "12%",
      },
      view6:{
        flexDirection: "row",
        position: "absolute",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 35,
        backgroundColor: "lightgrey",
        paddingVertical: 5,
        bottom: 0,
      },
      view7:{ alignItems: "center" }
})