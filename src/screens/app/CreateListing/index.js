import React, { useState } from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { launchImageLibrary } from 'react-native-image-picker';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { categories } from '../../../data/categories';
import axios from "axios";
const CreateListing = ({ navigation }) => {
    const [picture, setPicture] = useState([]);
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);

    const goBack = () => {
        navigation.goBack();
    }

    const uploadNewImage = async () => {
        setLoading(true);
        const result = await launchImageLibrary();

        if (result?.assets?.length) {
            setPicture(list => ([...list, ...result?.assets]));
            setLoading(false);
        }
    }

    const onDeleteImage = (picture) => {
        setPicture((list) => {
            const filteredImages = list.filter(img => img?.fileName !== picture?.fileName);
            return filteredImages;
        });
    }

    const onChange = (value, key) => {
        setValues((val) => ({ ...val, [key]: value }));
        console.log(value)
    }
    const onSubmit = () => {
        // if( !values?.email || !values?.password ){
        //     Alert.alert('tout les champs')
        //     return;
        //     }
                return axios({
                    method:'post',
                    url: `https://fd85-41-250-193-171.ngrok-free.app/api/Products`,
                    data:values,
                  }).then( response => {
                    navigation.navigate('Tabs')
                    console.log('response >>',response)
                }).catch(error => { 
                    console.log(values)
                    console.log(error)
                })            
    }
    return (
        <SafeAreaView>
            <Header showBack={true} onBackPress={goBack} title="Create a new listing" />

            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <Text style={styles.sectionTitle}>Upload Photos</Text>
                    
                    <View style={styles.imageRow}>
                        <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={uploadNewImage}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>

                        {picture?.map(picture => (
                            <View style={styles.imageCont} key={picture?.fileName}>                          
                                <Image style={styles.image}  source={{ uri: picture?.uri }} />
                                <Pressable hitSlop={20} onPress={() => onDeleteImage(picture)}>
                                    <Image style={styles.delete} source={require('../../../assets/close.png')} />
                                </Pressable>
                                <Input style={styles.testimg} placeholder="Listing Title" value={picture?.uri} defaultValue={picture?.uri} onChangeText={(v) => onChange(v=picture?.uri, 'Image')} /> 
                            </View>
                        ))}

                        {loading ? (
                            <ActivityIndicator />
                        ) : null}
                    </View>

                    <Input placeholder="Listing Title" label="Title" value={values.title} onChangeText={(v) => onChange(v, 'title')} />
                    <Input placeholder="Select the category" label="Category" value={values.category} onChangeText={(v) => onChange(v, 'category')}  options={categories} />
                    <Input placeholder="Enter price in USD" label="Price" value={values.price} onChangeText={(v) => onChange(v, 'price')} keyboardType="numeric" />
                    <Input style={styles.textarea} placeholder="Tell us more..." label="Description" value={values.description} onChangeText={(v) => onChange(v, 'description')} multiline />
                </KeyboardAvoidingView>

                <Button title="Submit" onPress={onSubmit} style={styles.button} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListing);