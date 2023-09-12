import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import action from '../redux/action'


const HomeScreen = (props) => {

  // const [number , setNumber] = useState(0)
  // This method is react redux  Provide 
  // useSelector Reducer ki value data ha 
  const number = useSelector((state) => state.counterReducer.num)

  //  In this method we connect react native with redux Manually                                  
  //  useEffect(() => {   
  //   const unsubscribe = subscribe(()=>{
  //     let value = getState().num
  //     setNumber(value)
  //     })
  //    return()=>{
  //     unsubscribe()
  //    }  
  //  }, [])



  const onAdd = () => {
    action.increment(number)
  }
  const DEC = () => {
    action.decrement(number)
  }
  return (
    <View style={styles.container} >
      <Text>{number}</Text>
      <Button onPress={onAdd} title="Add" />
      <Button onPress={DEC} title="Dec" />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
 justifyContent:'center',
alignItems:'center'  }

})