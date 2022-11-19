import { useState } from "react";
import { StyleSheet, View, FlatList, Alert, Button } from "react-native";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoal = () => {
    setModalIsVisible((prevState) => !prevState);
  };
  const addGoalHandler = (value) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: value, id: Math.random().toString() },
    ]);
    startAddGoal();
  };
  const deleteGoal = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.CTA}>
        <Button title="Add Goal" color="#0eb683" onPress={startAddGoal} />
      </View>

      {modalIsVisible && (
        <GoalInput
          onAddGoal={addGoalHandler}
          setModal={startAddGoal}
          showModal={modalIsVisible}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData?.item?.text}
                onDelete={deleteGoal}
                id={itemData?.item.id}
              />
            );
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
   
  },

  goalsContainer: {
    flex: 6,
    // alignItems: "center",
  },
  CTA: {
    marginTop: 16,
  },
});
