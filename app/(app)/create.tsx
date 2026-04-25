import { commonStyles } from '@/assets/styles/common.style'
import { createPageStyles } from '@/assets/styles/create.style'
import CategoryItem from '@/src/components/category-item'
import { COLORS } from '@/src/constant/colors'
import { Ionicons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { CATEGORIES, CategoryKey } from '@/src/constant/Category'
import { Transaction } from '@/src/db/schema'
import { useTransactionStore } from '@/src/store/useTransactionStore'
import { formatDisplayDate, formatDisplayTime } from '@/src/uitle/formatTime'


export default function Create() {

  const { id } = useLocalSearchParams();


  const [Amount, setAmount] = useState<string>('');
  const [SelectedCategory, setSelectedCategory] = useState<string>('');
  const [Title, setTitle] = useState<string>('');
  const [Note, setNote] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const { transactions, addTransaction, updateTransaction } = useTransactionStore();

  const handleAddTransaction = async () => {
    const isIncome = SelectedCategory === "Income" || SelectedCategory === "Salary";

    // Validation
    setAmount(val => val.replace(/[^0-9]/g, ''));
    const formatedAmount = isIncome ? Math.abs(Number(Amount)) : -Math.abs(Number(Amount));

    if (!Amount) return Alert.alert('Error', 'Please enter an amount.');
    if (!SelectedCategory) return Alert.alert('Error', 'Please select a category.');
    if (!Title) return Alert.alert('Error', 'Please enter a title.');



    if (!id) {
      // add transaction on db
      await addTransaction({
        title: Title,
        amount: formatedAmount,
        category: SelectedCategory as CategoryKey,
        note: Note,
        id: 0
      });
    } else {
      // update transaction on db
      await updateTransaction({
        title: Title,
        amount: formatedAmount,
        category: SelectedCategory as CategoryKey,
        id: Number(id),
        note: Note,
        created_at: selectedDate.toISOString()
      });
    }

    // reset form
    setAmount('');
    setSelectedCategory('');
    setTitle('');
    setNote('');

    router.push("/");
  };

  useEffect(() => {
    const loadData = async () => {
      if (id) {
        const res: Transaction | undefined = transactions.find(t => t.id === Number(id));

        if (res) {
          setAmount(String(Math.abs(res.amount)));
          setSelectedCategory(res.category as CategoryKey);
          setTitle(String(res.title));
          setNote(String(res.note));
          setSelectedDate(res.created_at && !isNaN(Date.parse(res.created_at)) ? new Date(res.created_at) : new Date())
        }
      }
    }
    loadData()
  }, [id, transactions])
  return (
    <View style={createPageStyles.container}>
      {/* TAB */}
      <View style={createPageStyles.TabContainer}>
        <View style={createPageStyles.TabLeftContainer}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Ionicons name="arrow-back" color={COLORS.text} size={20} />
          </TouchableOpacity>

          <View>
            <Text style={createPageStyles.TabText}>Create Transaction</Text>

            <View style={createPageStyles.dateContainer}>
              <View>
                <Ionicons name="calendar-outline" color={COLORS.text} size={18} />
              </View>
              <View style={createPageStyles.timeContainer}>
                <Text style={createPageStyles.subText}>{formatDisplayDate(selectedDate)}</Text>
                <View style={createPageStyles.dot}>
                  <Ionicons name="ellipse" color={COLORS.text} size={4.75} />
                </View>
                <Text style={createPageStyles.subText}>{formatDisplayTime(selectedDate)}</Text>
              </View>
            </View>

          </View>

        </View>
        <TouchableOpacity onPress={() => handleAddTransaction()}>
          <Text style={[commonStyles.clickableBtn, { textTransform: "uppercase" }]}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* MAIN */}
      <ScrollView>
        <View style={{ display: 'flex', flexDirection: 'column', gap: 24, position: 'relative' }}>

          {/* Hero */}
          <View style={createPageStyles.heroContainer}>
            <View style={createPageStyles.heroContainerHeading}>
              <Text style={createPageStyles.heroContainerHeadingText}>AMOUNT</Text>
            </View>

            <View style={createPageStyles.heroInputContainer}>
              <Text style={{ color: COLORS.primary, fontSize: 32 }}>$</Text>
              <TextInput
                placeholder='0'
                style={[createPageStyles.heroInput]}
                placeholderTextColor={COLORS.text}
                cursorColor={COLORS.primary}
                maxLength={8}
                keyboardType="numeric"
                value={Amount}
                onChangeText={(text) => setAmount(text.replace(/[^0-9]/g, ''))} // remove non-numeric characters
              />
            </View>
          </View>

          {/* Category */}
          <View style={createPageStyles.CategoryContainer}>
            <View style={createPageStyles.CategoryHeader}>
              <Text style={createPageStyles.CategoryHeaderText}>Category</Text>
            </View>

            <ScrollView
              contentContainerStyle={createPageStyles.categoryContainer}
              horizontal
              // style={createPageStyles.categoryContainer}
              showsHorizontalScrollIndicator={false}
            >
              {CATEGORIES.map((category) => (
                <TouchableOpacity key={category.id} onPress={() => setSelectedCategory(category.id)}>
                  <CategoryItem
                    active={category.id === SelectedCategory}
                    name={category.name}
                    icon={category.icon}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Description */}
          <View style={createPageStyles.descriptionWrapper}>

            {/* Title */}
            <View style={createPageStyles.descriptionContainer}>
              <View style={createPageStyles.descriptionLable}>
                <Ionicons name="pencil-sharp" color={COLORS.primary} size={15} />
                <Text style={createPageStyles.descriptionLableText}>Title</Text>
              </View>
              <TextInput
                placeholder='Title? What was for did ?'
                placeholderTextColor={'#C4C5D9'}
                style={{ color: '#C4C5D9' }}
                cursorColor={COLORS.primary}
                maxLength={20}
                value={Title}
                onChangeText={setTitle}
              />
            </View>

            {/* Note */}
            <View style={createPageStyles.descriptionContainer}>
              <View style={createPageStyles.descriptionLable}>
                <Ionicons name="pencil-sharp" color={COLORS.primary} size={15} />
                <Text style={createPageStyles.descriptionLableText}>Note (Optional)</Text>
              </View>
              <TextInput
                placeholder='Note Of your Transaction ? (Optional)'
                style={{ color: '#C4C5D9' }}
                placeholderTextColor={'#C4C5D9'}
                cursorColor={COLORS.primary}
                maxLength={20}
                value={Note}
                onChangeText={setNote}
              />
            </View>

          </View>


          <View style={createPageStyles.createButtonContainer}>
            <TouchableOpacity style={commonStyles.primaryButton} onPress={() => handleAddTransaction()}>
              <Text style={[commonStyles.clickableBtn, { textTransform: "uppercase", color: COLORS.light }]}>Save</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

    </View>
  )
}