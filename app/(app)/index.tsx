import { commonStyles } from "@/assets/styles/common.style";
import { homeStyles } from "@/assets/styles/home.style";
import AddButton from "@/src/components/add-button";
import NoTransactionsFound from "@/src/components/no-transactions-found";
import TransactionItem from "@/src/components/transaction-item";
import { COLORS } from "@/src/constant/colors";
import { TransactionType } from "@/src/types/types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Text, TouchableOpacity, View } from "react-native";



export default function Index() {
  const demoTransactions: TransactionType[] = [
    { id: 1, title: "Salary", amount: 50000, date: "2023-01-01", time: "6:00 AM", category: "Salary" },
    { id: 2, title: "Groceries", amount: -166, date: "2023-01-01", time: "6:00 AM", category: "Groceries" },
    { id: 3, title: "Entertainment", amount: -199, date: "2023-01-01", time: "6:00 AM", category: "Entertainment" },
    { id: 4, title: "Clothing", amount: -599, date: "2023-01-01", time: "6:00 AM", category: "Clothing" },
    { id: 5, title: "Health", amount: -99, date: "2023-01-01", time: "6:00 AM", category: "Health" },
    { id: 6, title: "Travel", amount: -300, date: "2023-01-01", time: "6:00 AM", category: "Travel" },
    { id: 7, title: "Food", amount: -80, date: "2023-01-01", time: "6:00 AM", category: "Food" },
  ]
  
  return (
    <View style={[homeStyles.container, { backgroundColor: COLORS.natural, position: "relative" }]} >

      {/* HERO SECTION */}
      <View>
        <View style={homeStyles.amountContainer}>
          <Text style={{ color: COLORS.primary, fontSize: 24, }}>$</Text>
          <Text style={{
            color: COLORS.light,
            fontSize: 60,
            lineHeight: 60,
            fontWeight: 600, // "semibold"
          }}>12350</Text>
          <Text style={{ color: COLORS.light, fontSize: 24 }}>.50</Text>
        </View>

        <View>
          <Text style={homeStyles.amountSubText}>CURRENT LIQUIDITY</Text>
        </View>

        <View style={homeStyles.StatsWrapper}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#1B1B1B', '#151515']}
            style={homeStyles.StatsContainer}
          >
            <View style={[homeStyles.StatsIconContainer, { backgroundColor: "#193525" }]}>
              <Ionicons name="arrow-up" color={COLORS.primary} size={24} />
            </View>
            <View style={homeStyles.StatsTextContainer}>
              <Text style={homeStyles.StatsText}>INFLOW</Text>
              <Text style={homeStyles.StatsAmountText}>+$4700</Text>
            </View>
          </LinearGradient>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#1B1B1B', '#151515']}
            style={homeStyles.StatsContainer}
          >
            <View style={[homeStyles.StatsIconContainer, { backgroundColor: "#331616" }]}>
              <Ionicons name="arrow-up" color={COLORS.secondary} size={24} />
            </View>
            <View style={homeStyles.StatsTextContainer}>
              <Text style={homeStyles.StatsText}>OUTFLOW</Text>
              <Text style={homeStyles.StatsAmountText}>-$4700</Text>
            </View>
          </LinearGradient>
        </View>
      </View>


      {/* TRANSACTIONS SECTIONS */}
      <View style={homeStyles.TransactionsContainerWraapper}>
        <LinearGradient
          style={homeStyles.TransactionsContainer}
          colors={[COLORS.surface, COLORS.natural]}
        >
          {/* TRANSACTIONS HEADER */}
          <View style={homeStyles.TransactionsHeaderContainer}>
            <Text style={homeStyles.TransactionsHeaderText}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={commonStyles.clickableBtn}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>



          <FlatList
            data={demoTransactions}
            renderItem={({ item }) => <TransactionItem data={item} />}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={homeStyles.TransactionsContentContainer}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<NoTransactionsFound />}
          />
        </LinearGradient>
      </View>


      <View style={{
        position: "absolute",
        bottom: 40, // 40
        right: 32
      }}>
        <AddButton />
      </View>
    </View>
  );
}

