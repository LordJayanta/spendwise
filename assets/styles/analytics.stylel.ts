import { COLORS } from "@/src/constant/colors";
import { StyleSheet } from "react-native";

export const analyticsStyles = StyleSheet.create({
  TabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  TabLeftContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  TabText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.light,
  },
  Section: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  CurrentBalanceHeaderText: {
    fontSize: 12,
    fontWeight: "semibold",
    color: COLORS.text,
    textTransform: "uppercase",
  },
  CurrentBalanceAmountWrrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CurrentBalanceAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  CurrentBalancePercentageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: COLORS.gray,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 32,
  },
  CurrentBalancePercentageText: {
    fontSize: 12,
    fontWeight: "semibold",
    color: COLORS.light,
  },
  ChartContainer: {
    width: "100%",
    backgroundColor: COLORS.surface,
    borderRadius: 32,
    overflow: "hidden",
  },
  ChartHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  ChartHeaderTitle: {
    color: COLORS.light,
    fontSize: 24,
    fontWeight: "semibold",
  },
  ChartHeaderText: {
    color: COLORS.text,
    fontSize: 12,
  },
});
