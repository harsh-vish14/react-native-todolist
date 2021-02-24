
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { useDebugValue, useState } from 'react';
import { Text, TextInput, View,Button, TouchableNativeFeedback,TouchableHighlight, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Platform, ScrollView, Keyboard } from 'react-native';
import Task from './components/task';
import styles from './styles'


export default function App() {
  const [value, setValue] = useState("");
  const [listItems, setListItems] = useState([]);

  var buttonClicked = () => {
    Keyboard.dismiss()
    // console.log(value)
    setListItems((preve) => {
      return [...preve, value];
    });
    // console.log(listItems)
    setValue("");
  };

  var remove = (index) => {
    var newList = [...listItems]
    newList.splice(index, 1)
    setListItems(newList)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskwarpper}>
        <Text style={styles.sectionTitle}>
          Today's Task
      </Text>
        <ScrollView>
          {
          listItems.map((data,i) => {
            return (
              <TouchableOpacity style={styles.items} onPress={() => remove(i)} key={i}>
              <Task title={data} />
            </TouchableOpacity>
            )
          })
        }
        </ScrollView>
      </View>
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputbox}>
        <TouchableNativeFeedback >
          <TextInput
            style={styles.textbox}
            placeholder="Type here to translate!"
            value={value}
            onChangeText={valueCame => setValue(valueCame)}
          // defaultValue={text}
          />
        </TouchableNativeFeedback>

        <TouchableHighlight style={styles.buttons} onPress={buttonClicked}>
          <Text style={{ fontSize: 34, color: '#C0C0C0' }}>
            +
            </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
}

