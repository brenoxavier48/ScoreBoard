import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 160,
    width: "60%",
    margin: 5,
    
  },

  container__data: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fb7700",
    zIndex: 2,
    borderRadius: 4,
    borderBottomStartRadius: 160,
    borderTopEndRadius: 160,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },

  container__action: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    height: "100%",
    width: "100%",
    flexDirection: "row",
  },

  container__action__delete: {
    width: "50%",
    borderRadius: 4,
  },

  container__action__edit: {
    width: "50%",
    borderRadius: 4,
  },
})