import { Text, StyleSheet, View, TouchableOpacity, Modal, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

const TaskList : React.FC =() => {

    const [isModalVisible, setIsModalVisible] = useState(false) 
    const [newTaskTitle, setNewTaskTitle] = useState('');


    return (
      <View style={styles.container}>
        <Text>TaskList</Text>
        <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnTxt}>Add</Text>
        </TouchableOpacity> 
        <Modal  
          visible={isModalVisible} 
          onRequestClose={()=> setIsModalVisible(false)} 
          animationType='slide' 
          transparent={true}
        >
          <KeyboardAvoidingView style={styles.modalCotainer} >
            <View  style={styles.modalContent}>

            </View>
          </KeyboardAvoidingView>

        </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f5f5f5'
    }, 
    addBtn: {
      position: 'absolute', 
      right: 16, 
      bottom: 16, 
      backgroundColor: '#6200ee', 
      width: 100, 
      height: 50, 
      borderRadius: 25, 
      justifyContent: 'center', 
      alignItems: 'center',
      elevation: 4
    }, 
    addBtnTxt: {
      fontSize: 18, 
      fontWeight: 'bold', 
      color: '#fff'
    }, 
    modalCotainer: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'rgb(0,0,0,0.5)',
    }, 
    modalContent: {
      backgroundColor: '#fff', 
      borderRadius: 8, 
      padding: 20, 
      width:'70%', 
      maxWidth: 300, 
      elevation: 5
    }
})
export default TaskList
