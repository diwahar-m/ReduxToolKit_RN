import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

const Projects : React.FC =() => {
  
    return (
      <View style={styles.container}>
        <Text>Projects</Text>
        {/* Basic components */} 
        {/* sub screens using stack navigation */}
        {/* Basic animation & combination properties from reanimated */}
        {/* Integrate 3rd party api in one sub screen & context there for dark theme */}  
        {/* Form in another sub screen & manage state using redux */}
      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f5f5f5'
    }
})
export default Projects
