import { COLORS } from "@/src/shared/constant/colors";
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  baseScreen: {
    flex: 1,
    backgroundColor: COLORS.natural,
  },
  clickableBtn: {
    fontSize: 16,
    color: COLORS.primary,
    // fontFamily: "Inter",
    fontWeight: "600",
  },
  primaryButton: {
    paddingVertical: 20,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    backgroundColor: COLORS.primary,
  },
});
