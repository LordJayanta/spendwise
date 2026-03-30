import { COLORS } from "@/src/constant/colors";
import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  amountContainer: {
    paddingTop: 48,
    paddingHorizontal: 16,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  //   amountText: {
  //     fontSize: 60,
  //     lineHeight: 60,
  //   },
  amountSubText: {
    width: "100%",
    fontSize: 12,
    paddingTop: 8,
    paddingBottom: 16,
    textAlign: "center",
    color: COLORS.text,
  },

  StatsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  StatsContainer: {
    padding: 20,
    borderRadius: 36,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  StatsIconContainer: {
    width: 36,
    height: 36,
    padding: 6,
    borderRadius: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  StatsTextContainer: {},
  StatsText: {
    fontSize: 10,
    color: COLORS.text,
  },
  StatsAmountText: {
    fontSize: 16,
    color: COLORS.light,
    fontFamily: "Inter",
    fontWeight: 600, // "semibold",
  },
  TransactionsContainerWraapper: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  TransactionsContainer: {
    flex: 1,
    gap: 38,
    padding: 24,
    borderRadius: 32,
  },
  TransactionsHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  TransactionsHeaderText: {
    fontSize: 18,
    color: COLORS.light,
    fontFamily: "Inter",
    fontWeight: 600, // "semibold",
  },
  TransactionsHeaderbtn: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: "Inter",
    fontWeight: 600, // "semibold",
  },
  TransactionsContentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 38,
  },
});
