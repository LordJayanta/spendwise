import { COLORS } from "@/src/shared/constant/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
  },
  heroTitle: {
    width: 300,
    fontSize: 32,
    fontFamily: "Inter",
    fontWeight: "bold",
    color: COLORS.light,
    textAlign: "center",
  },
  heroText: {
    width: 250,
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "regular",
    color: COLORS.text,
    textAlign: "center",
  },
  img: {
    width: "100%",
  },
  messageContainer: {
    paddingHorizontal: 34,
  },
  message: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.text,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    display: "flex",
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  messageText: {
    width: 200,
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "regular",
    color: COLORS.text,
  },
});
