import { StyleSheet, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="your course goal"
        onChangeText={goalInputHandler}
        value={value}
      />
      <Button title="Add Goal" onPress={addGoals} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccc",
    width: "75%",
    marginRight: 8,
    paddingLeft: 8,
    padding: 2.5,
  },
});
