import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import PeopleList from "./src/components/PeopleList";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    //precisa passar para o pai o props
    super(props);

    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    /*Promises*/
    axios.get("https://randomuser.me/api?nat=BR&results=5").then((response) => {
      //Destruct
      const { results } = response.data;

      //Não pode atualizar state fazendo this.state =(só no constructor), tem que usar setState
      this.setState({
        persons: results,
      });
    });
  }

  //de preferencia para usar componentes para renderizer elementos em vez de metodos

  render() {
    return (
      <View>
        <Header title="Pessoas" />
        <PeopleList persons={this.state.persons} />
      </View>
    );
  }
}
