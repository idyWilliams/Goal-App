import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goal}>
      <Text style={styles.goalText}>{props.text}</Text>
      <View>
        <Pressable
          android_disableSound={false}
          android_ripple={{ color: "#fff" }}
          style={styles.press}
          onPress={props.onDelete.bind(this, props.id)}
        >
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
    borderRadius: 50,
    // padding:8,
    color: "#e10",
    fontSize: 20,
     height: "100%",
    //  width: "100%"
    
  },
  press: {
  
    borderRadius: 50,
    // backgroundColor: "#fff",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
