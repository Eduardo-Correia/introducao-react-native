import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NamesList from "../components/NamesList";

const PeopleList = (props) => {
  const { persons } = props;
  const textElements = persons.map((people) => {
    const { first } = people.name;
    return (
      <View style={styles.line}>
        <Text style={styles.lineText} key={first}>
          {first}
        </Text>
      </View>
    );
  });

  return <View style={styles.container}>{textElements}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#78dbeb",
  },
  line: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
  },
});

export default PeopleList;
