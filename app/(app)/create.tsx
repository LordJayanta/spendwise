import { commonStyles } from '@/assets/styles/common.style'
import { createPageStyles } from '@/assets/styles/create.style'
import CategoryItem from '@/src/components/category-item'
import { COLORS } from '@/src/constant/colors'
import { Ionicons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { CATEGORIES } from '@/src/constant/Category'
import { getTransactionById, updateTransactionById, useSqlite } from '@/src/db/useSqlite'


export default function Create() {

  const { id } = useLocalSearchParams();


  const [Amount, setAmount] = useState<string>('');
  const [SelectedCategory, setSelectedCategory] = useState<string>('');
  const [Title, setTitle] = useState<string>('');
  const [Note, setNote] = useState<string>('');

  const { addTransaction } = useSqlite();

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
        category: SelectedCategory
      });
    } else {
      // update transaction on db
      await updateTransactionById({
        title: Title,
        amount: formatedAmount,
        category: SelectedCategory,
        id: Number(id)
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
        const res: any = await getTransactionById(Number(id));

        setAmount(String(Math.abs(res?.amount)));
        setSelectedCategory(res?.category);
        setTitle(res?.title);
        setNote(res?.note);
      }
    }
    loadData()
  }, [id])
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
                <Text style={createPageStyles.subText}>12:38 AM</Text>
                <View style={createPageStyles.dot}>
                  <Ionicons name="ellipse" color={COLORS.text} size={4.75} />
                </View>
                <Text style={createPageStyles.subText}>Mar 27, 2026</Text>
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