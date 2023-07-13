import React, { useState } from "react";
import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import Input from "../Input";

const Header = ({title,keyword, onBackPress,onSearch,onLogout, ShowLogout , showSearch , showBack }) => {
  const [showSearchInput, setShowSearchInput]=useState(false);
  const onSearchClick = () => {
    setShowSearchInput(s=> !s)
  }
  return(
    <View style={styles.mainContainer}>
    <View style={styles.container}>
        {showBack ? (
        <Pressable onPress={onBackPress}>
            <Image style={styles.image} source={require('../../assets/back.png')} />
        </Pressable>
        ): showSearch ? (
          <Pressable onPress={onSearchClick}>
            <Image style={styles.image} source={require('../../assets/search.png')} />
        </Pressable>
        ): <View style={styles.space}/> }

        <Text style={styles.title}>{title}</Text>

        {ShowLogout ?(
        <Pressable onPress={onLogout}>
            <Image style={styles.image} source={require('../../assets/logout.png')} />
        </Pressable>
        ): <View style={styles.space}/>}
    </View>
          {showSearchInput ? (
            <Input onChangeText={onSearch} value={keyword} placeholder={'Type your keyword...'} ></Input>
          ): null}
    </View>
    )
}
export default React.memo(Header);