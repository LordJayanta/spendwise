import { homeStyles } from "@/assets/styles/home.style";
import AddButton from "@/src/components/add-button";
import NoTransactionsFound from "@/src/components/no-transactions-found";
import TransactionItem from "@/src/components/transaction-item";
import TransactionActions from "@/src/components/TransactionActions";
import { COLORS } from "@/src/constant/colors";
import { useTransaction } from "@/src/context/TransactionContext";
import { TransactionType } from "@/src/types/types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";



export default function Index() {
  const { summary, transactions } = useTransaction();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState<number | null>(null);

  return (
    <View style={[homeStyles.container, { backgroundColor: COLORS.natural, position: "relative" }]} >
      <TransactionActions
        data={{ id: selectedTransactionId }}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTransactionId(null);
        }}
      />

      {/* HERO SECTION */}
      <View>
        <View style={homeStyles.amountContainer}>
          <Text style={{ color: COLORS.primary, fontSize: 24, }}>$</Text>
          <Text style={{
            color: COLORS.light,
            fontSize: 60,
            lineHeight: 60,
            fontWeight: 600, // "semibold"
          }}>{Math.abs(summary.balance)}</Text>
          {/* <Text style={{ color: COLORS.light, fontSize: 24 }}>.50</Text> */}
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
              <Text style={homeStyles.StatsAmountText}>+${Math.abs(summary.income)}</Text>
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
              <Text style={homeStyles.StatsAmountText}>-${Math.abs(summary.expence)}</Text>
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
            {/* <TouchableOpacity>
              <Text style={commonStyles.clickableBtn}>VIEW ALL</Text>
            </TouchableOpacity> */}
          </View>



          <FlatList
            data={transactions}
            renderItem={({ item }: { item: TransactionType }) => (
              <TouchableOpacity onLongPress={() => {
                setIsModalOpen(!isModalOpen);
                setSelectedTransactionId(item.id);
              }}>
                <TransactionItem data={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={homeStyles.TransactionsContentContainer}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<NoTransactionsFound />}
          />
        </LinearGradient>
      </View>


      {!isModalOpen && <View style={{
        position: "absolute",
        bottom: 40, // 40
        right: 32
      }}>
        <AddButton />
      </View>}
    </View>
  );
}

