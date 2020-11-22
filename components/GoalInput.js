import React, { useState } from "react";
import { Button, StyleSheet, View, TextInput, Modal } from "react-native";
const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Todo Item"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.inputButtons}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => props.cancelGoalAdd()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 5,
    width: "80%",
    marginBottom: 10,
  },

  inputButtons: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-around",
    width: "60%",
  },

  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  button: {
    width: "40%",
  },
});
export default GoalInput;
