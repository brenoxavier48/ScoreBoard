import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 260,
    margin: 5,
    alignItems: "center"
  },

  container__data: {
    height: "100%",
    width: "70%",
    backgroundColor: "#fb7700",
    zIndex: 2,
    borderRadius: 0,
    borderBottomStartRadius: 110,
    borderTopEndRadius: 110,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },

  container__data__tittle: {
    fontSize: 32,
    fontWeight: "bold"
  },

  container__action: {
    position: "absolute",
    bottom: 0,
    height: "100%",
    width: "100%",
    flexDirection: "row",
  },

  container__action__delete: {
    backgroundColor: "black",
    width: "50%",
    borderRadius: 12,
    borderBottomEndRadius: 120,
    
  },

  container__action__edit: {
    backgroundColor: "black",
    width: "50%",
    borderRadius: 12,
    borderTopStartRadius: 120
  },

  container__action__text: {
    color: "#fb7700",
    position: "absolute"
  }
})