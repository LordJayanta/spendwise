import { COLORS } from "@/src/constant/colors";
import { StyleSheet } from "react-native";

export const createPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.natural,
  },
  TabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  TabLeftContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    paddingVertical: 4,
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  TabText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.light,
  },
  subText: {
    fontSize: 12,
    fontWeight: "regular",
    color: COLORS.text,
  },
  dot: {
    width: 15,
    height: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  heroContainer: {
    paddingTop: 32,
    paddingBottom: 20,
  },
  heroContainerHeading: {
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heroContainerHeadingText: {
    fontSize: 14,
    fontWeight: "semibold",
    color: COLORS.text,
  },
  heroInput: {
    fontSize: 60,
    textAlign: "center",
    color: COLORS.light,
    fontWeight: 700,
  },
  heroInputContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  CategoryContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    paddingLeft: 16,
  },
  CategoryHeader: {
    paddingLeft: 16,
  },
  CategoryHeaderText: {
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: 600, // "semibold"
    color: COLORS.text,
    textTransform: "uppercase",
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    flexWrap: "nowrap",
    paddingLeft: 16,
  },
  descriptionWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    paddingHorizontal: 16,
  },
  descriptionContainer: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    backgroundColor: "#353534",
    borderWidth: 1,
    borderColor: "#424344",
    borderRadius: 32,
  },
  descriptionLable: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  descriptionLableText: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.primary,
    textTransform: "uppercase",
  },
  createButtonContainer: {
    paddingHorizontal: 24,
    // position: "absolute",
    // width: "100%",
    // bottom: 0,
    paddingBottom: 24,
  },
});
