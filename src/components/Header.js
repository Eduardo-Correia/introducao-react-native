import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Não tem state, portanto não precisa de classe. Pode ser uma função
//class Header extends React.Component{
//    render() {
//        return(
//            //JSX
//        );
//    }
//}

const Header = props => (
  <View style={style.container}>
    <Text style={style.title}>{props.title}</Text>
  </View>
);

/*StyleSheet melhor usar o create...*/
const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#3d95b8",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 50,
    color: "#fff"
  }
});

export default Header;
