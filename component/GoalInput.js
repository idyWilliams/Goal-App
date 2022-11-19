import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const img = "../assets/images/goalimg.png";
const GoalInput = (props) => {
  const [value, setValue] = useState("");

  const goalInputHandler = (e) => {
    setValue(e);
  };

  const addGoals = () => {
    props.onAddGoal(value);
    setValue("");
  };

  return (
    <>
      <StatusBar style="light"/>
      <Modal visible={props.showModal} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require(img)} />

          <TextInput
            style={styles.textInput}
            placeholder="Enter course goal"
            onChangeText={goalInputHandler}
            value={value}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.setModal} color="#e10" />
            </View>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoals} color="#0eb681" />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 24,
    // borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    backgroundColor: "#cccddd",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddcc",
    width: "100%",
    borderRadius: 5,
    paddingLeft: 8,
    padding: 5,
    backgroundColor: "#fff",
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    margin: 5,
    width: "37%",
  },
  image: {
    margin: 20,
    width: 100,
    height: 100,
  },
});
