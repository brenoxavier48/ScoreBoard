import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "50%",
    
  },

  container__data: {
    height: "60%",
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "black",
    color: "white",
    borderRadius: 4,
    borderBottomStartRadius: 70,
    borderBottomEndRadius: 70
  },

  container__action: {
    position: "absolute",
    bottom: 0,
    height: "50%",
    flexDirection: "row"
  }
})