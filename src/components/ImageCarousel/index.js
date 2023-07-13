import React, { useState } from "react";
import {Dimensions} from "react-native";
import { FlatList, Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
const {width} = Dimensions.get('window');
const ImageCarousel =({images}) => {
  const [activeIndex, setActiveIndex]= useState(0);
  const renderImage = ({item}) => {
    return (
      <Image style={styles.image} source={{uri: item}}/>
    )
  }
  const handleScrollEnd = (e) => {
    const horizontalOffest = e.nativeEvent.contentOffset.x;
    const index = Math.round(horizontalOffest/width);
    setActiveIndex(index);
  }
  return(
    <View>
   <FlatList horizontal pagingEnabled style={styles.list} data={images} renderItem={renderImage} onMomentumScrollEnd={handleScrollEnd} ></FlatList>
   <View style={styles.pagination}>
    {images?.map((_,i)=>(
      <View key={i} style={[styles.paginationLine, i === activeIndex ? styles.activeLine:{}]} />
    ))}
   </View>
  </View>
  ) 
}
export default React.memo(ImageCarousel);