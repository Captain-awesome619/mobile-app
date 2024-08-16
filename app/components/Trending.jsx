import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
const Trending = () => {
  return (
    <FlatList
      data={""}
      horizontal
      keyExtractor={(item) => item.$id}

    />
  )
}

export default Trending

const styles = StyleSheet.create({})