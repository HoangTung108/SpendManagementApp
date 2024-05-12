import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    headertext: {
      left:20,
      color: '#fff',
      fontFamily: 'Pacifico',
      fontSize: 50,},
    middle: {
      flex:2,
      alignItems: 'center',
      paddingTop: 60,
      zIndex: 1,
    },
    textMid: {
      color: '#fff',
      alignContent: "center",
      alignItems: "center",
      fontFamily: 'Pacifico',
      fontSize: 25,
      paddingBottom: 10,
    },
    inputText: {
      height: "22%",
      width: '80%',
      top:10,
      borderWidth: 1.5,
      borderColor: '#ccc',
      marginBottom: 15,
      paddingHorizontal: 10,
    },
    buttonPos: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      paddingTop: 20,
    },
    button: {
      width: '40%',
      borderRadius: 10,
      backgroundColor: '#768',
      paddingVertical: 10,
      alignItems: 'center',
    },
    circleButton:{
      width: '20%',
      height: "10%",
      borderRadius: "100%",
      backgroundColor: '#ffb8d0',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      alignSelf: 'center',
      bottom:-30,
      zIndex:1,
    },
    Setting:{
      alignSelf: 'center',
      left: 100,
      bottom:0,
      zIndex:1,
    },
    modalView: {
      height:230,
      width: "80%",
      top:'40%',
      padding:20,
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems: 'center',
      alignSelf: "center",
      position:"relative",
      shadowColor: '#000',
    
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
  
    },
    toolbar: {
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#fdccd4',
      height: 100,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    box:{
      height: 150,
      width:150,
      backgroundColor: '#fff',
      borderRadius: 20,
    },
    scrollview:{
        flexDirection:'column',  justifyContent: 'space-around',
      width: '100%',
      paddingTop: 600,
    }
  });
  