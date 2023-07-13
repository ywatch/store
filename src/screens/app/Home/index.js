import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";
const Home = ({navigation}) => {
    const [selectedCategory,setSelectedCategory]= useState();
    const [keyword,setkeyword]= useState();
    const [filteredProducts,setFilteredProducts]= useState(products);
   useEffect(() => {
    if (selectedCategory && !keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory);
            setFilteredProducts(updatedProducts);}
            else if (selectedCategory && keyword) {
                const updatedProducts = products.filter((product) => product?.category === selectedCategory && product?.title.toLowerCase().includes(keyword.toLowerCase()));
                setFilteredProducts(updatedProducts);}
                else if (!selectedCategory && keyword) {
                    const updatedProducts = products.filter((product) => product?.title.toLowerCase().includes(keyword.toLowerCase()));
                    setFilteredProducts(updatedProducts);}
                else if ( !selectedCategory && !keyword) {
                setFilteredProducts(products);
            }
                }, [selectedCategory,keyword])
    const renderCategorieItem = ({item, index}) =>{
        
        return(
            <CategoryBox onPress={()=> setSelectedCategory(item?.id)}
              isSelected={item?.id === selectedCategory}
            isFirst={index === 0}
               title={item?.title} 
               image={item?.image} ></CategoryBox>
        )
    }
    const renderProductsItem = ({item}) =>{
        const onProductPress= (product) => {
            navigation.navigate('ProductDetails',{product})
        }
        return(
            <ProductHomeItem onPress={()=>onProductPress(item)} title={item?.title} image={item?.image} price={item?.price} ></ProductHomeItem>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
                <Header showSearch keyword={keyword} onSearch={setkeyword} title={'Find All You Need'} ></Header>
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} keyExtractor={(item, index)=> String(index)} renderItem={renderCategorieItem} ></FlatList>
                <FlatList numColumns={2}   data={filteredProducts} style={styles.listP}  keyExtractor={(item)=> String(item.id)} renderItem={renderProductsItem} ListFooterComponent={<View style={{height:300}}></View>} ></FlatList>
        </SafeAreaView>
    )
}
export default React.memo(Home)