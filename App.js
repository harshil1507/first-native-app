import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItem";

export default function App() {
  const [goals, setGoal] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) return;
    console.log("Goal added", goalTitle);
    setGoal((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setModalVisible(false);
  };

  const cancelGoalHandler = () => {
    setModalVisible(false);
  };

  const onDeleteHandler = (deleteId) => {
    console.log("delete object", deleteId);
    setGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== deleteId);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={() => setModalVisible(true)} />
      <GoalInput
        onAddGoal={addGoalHandler}
        isModalVisible={isModalVisible}
        cancelGoalAdd={cancelGoalHandler}
        setInvisible={() => setModalVisible(false)}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <GoalItems
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={onDeleteHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 50,
  },
});
