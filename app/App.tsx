import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from "./components/FlatCards"
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import ImageCard from './components/ImageCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        {/* <ImageCard/> */}
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App