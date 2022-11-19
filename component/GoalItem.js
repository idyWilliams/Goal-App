import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goal}>
      <Text style={styles.goalText}>{props.text}</Text>
      <View>
        <Pressable onPress={props.deleteGoal}>
          <Text style={styles.close}>x</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    backgroundColor: "#0eb683",
    margin: 8,
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  goalText: {
    color: "#fff",
  },
  close: {
    color: "#e10",
    backgroundColor: "#ccc",
    // padding: 5,
    borderRadius: 50,
    height: '100%',
    width: '100%',
    textAlign: "center",
    // transition: scale(.9),
  },
  press:{
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: "center",
  }
});
