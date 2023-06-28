import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contractual"]

const Welcome = () => {
  const router = useRouter()
  const [activeJobTypes, setActiveJobTypes] = useState("Full-time")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Raman</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onChange={() => { }} placeholder='What Are You Lokking For ?' />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes} renderItem={({ item }) => (
          <TouchableOpacity style={styles.tab(activeJobTypes, item)} onPress={() => {
            setActiveJobTypes(item)
            router.push(`/search/${item}`)
          }}>
            <Text style={styles.tabText(activeJobTypes, item)}>{item}</Text>
          </TouchableOpacity>
        )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal  
        />
      </View>
    </View>
  )
}

export default Welcome