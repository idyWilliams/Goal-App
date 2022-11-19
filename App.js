import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (value) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: value, id: Math.random().toString() },
    ]);
  };
 const deleteGoal = () =>{
  console.log("dlete");
 }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData?.item?.text} onDelete={deleteGoal}/>;
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item?.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 30,
    paddingHorizontal: 16,
    height: "100%",
    // paddingVertical: 10,
    // flexDirection: "column",
    // alignItems: 'flex-end',
  },

  goalsContainer: {
    flex: 6,
    // alignItems: "center",
  },
});
