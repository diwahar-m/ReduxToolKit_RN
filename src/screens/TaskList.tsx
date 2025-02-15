import { Text, StyleSheet, View, TouchableOpacity, Modal, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'

const TaskList : React.FC =() => {

    const [isModalVisible, setIsModalVisible] = useState(false) 
    const [newTaskTitle, setNewTaskTitle] = useState('');


    return (
      <View style={styles.container}>
        <Text>TaskList</Text>
        <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnTxt} onPress={()=> setIsModalVisible(true)}>Add</Text>
        </TouchableOpacity> 
        <Modal  
          visible={isModalVisible} 
          onRequestClose={()=> setIsModalVisible(false)} 
          animationType='slide' 
          transparent={true}
        >
          <KeyboardAvoidingView style={styles.modalCotainer} >
            <View  style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Add New Task</Text>
                <TouchableOpacity 
                    style={styles.closeBtn} 
                    onPress={()=> setIsModalVisible(false) }
                >
                  <Text style={styles.closeBtnTxt}>Close</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.input} 
                value={newTaskTitle} 
                onChangeText={setNewTaskTitle} 
                placeholder='Enter task title' 
                placeholderTextColor="#999999"
                autoFocus
              />
              <View style={styles.modalButtons}>
                 <TouchableOpacity 
                    style={[styles.modalBtn, styles.cancelBtn]} 
                    onPress={()=> setIsModalVisible(false) }
                 >
                  <Text style={styles.closeBtnTxt}>Cancel</Text>
                 </TouchableOpacity> 
                  <TouchableOpacity 
                    style={[styles.modalBtn, styles.submitBtn]}
                  >
                    <Text style={styles.closeBtnTxt}>Add Task</Text>
                  </TouchableOpacity>
              </View>

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
      maxWidth: 400, 
      elevation: 5
    }, 
    modalHeader: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: 20
    }, 
    modalTitle: {
      fontSize: 22, 
      fontWeight: 'bold', 
      color: '#333333'
    }, 
    closeBtn: {
      backgroundColor: '#6200ee', 
      borderRadius: 8, 
      justifyContent: 'center', 
      alignItems: 'center',
      elevation: 4, 
      padding: 12, 
    }, 
    closeBtnTxt: {
      fontSize: 12, 
      fontWeight: 'bold', 
      color: '#fff'
    },  
    input: {
      borderWidth: 1, 
      borderColor: '#e0e0e0', 
      borderRadius: 4, 
      padding: 12, 
      marginBottom : 20,
      fontSize: 16
    }, 
    modalButtons: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
    }, 
    modalBtn: {
      paddingVertical: 10, 
      paddingHorizontal: 20 , 
      borderRadius: 4, 
      marginLeft: 10

    }, 
    cancelBtn: {
      backgroundColor: '#d37c09'
    }, 
    submitBtn: {
      backgroundColor: '#b912a3'
    }
})
export default TaskList
