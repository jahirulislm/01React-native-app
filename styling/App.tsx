import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from "./components/FlatCards"
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import ImageCard from './components/ImageCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard/>
{/* <ImageCard/> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default App