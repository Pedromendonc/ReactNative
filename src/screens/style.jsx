import { StyleSheet} from 'react-native';



export const styles = StyleSheet.create({
    loadingScreen: {
        position: "absolute",
        display: "flex",
        width: "100%",
        height: "110%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0008",
        opacity: 1,
        zIndex: 9999
    },
    
    container: {
      flex: 1,    
      backgroundColor: '#2196F3',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
    },
    titulo:{
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        margin:40
    },
    btn:{
        
        fontWeight:'bold',
        fontSize:30,
        color:'white',
        padding:10,
        backgroundColor:'blue',
        borderRadius:20

    },
    fato:{
        color:'white',
        fontWeight: 'bold',
        fontSize:20,
        padding:30
    
    }
 
  
    
});
  