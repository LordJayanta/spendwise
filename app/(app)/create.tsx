import { commonStyles } from '@/assets/styles/common.style'
import { createPageStyles } from '@/assets/styles/create.style'
import CategoryItem from '@/src/components/category-item'
import { COLORS } from '@/src/constant/colors'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Create() {
  const [Amount, setAmount] = useState('');
  const [Category, setCategory] = useState('');
  const [Title, setTitle] = useState('');
  const [Note, setNote] = useState('');

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
        <TouchableOpacity>
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
                onChangeText={setAmount}
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
              <CategoryItem />
              <CategoryItem active />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
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
                placeholderTextColor={'#C4C5D9'}
                cursorColor={COLORS.primary}
                maxLength={20}
                value={Note}
                onChangeText={setNote}
              />
            </View>

          </View>


          <View style={createPageStyles.createButtonContainer}>
            <TouchableOpacity style={commonStyles.primaryButton}>
              <Text style={[commonStyles.clickableBtn, { textTransform: "uppercase", color: COLORS.light }]}>Save</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

    </View>
  )
}