import React from 'react'
import { View, Text, Platform, FlatList } from 'react-native'
import HeaderButton from '../components/HeaderButton'
import { HeaderButtons, Item,} from 'react-navigation-header-buttons';
import { HeaderTitle } from '@react-navigation/stack';
import color from '../constant/Color';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { DrawerActions } from '@react-navigation/native';
import CategoriGridTile from '../components/CategoriGridTile';
import {CATEGORIES} from '../data/dummy-data'
const FoodCategoriScreen = (props)=>{

    const renderGridItem = (ItemData)=>{
        return(

            <CategoriGridTile
            title={ItemData.item.title}
            onSelect={()=>{
                console.log('tes')
            }}
            image={ItemData.item.urlImage}
            />
        )
    }

    return(
        <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item,index) => item.id}
        />
    )
}

export const FoodScreenOptions = (navData) => {
    return{
        headerTitle: "Food Categori",
        headerStyle:{
            backgroundColor: Platform.OS==="android"?color.primaryColor:"",
        },
        headerTintColor: Platform.OS==="android"?"white":color.primaryColor,
        headerLeft:()=>{
            return(
                <HeaderButtons
                HeaderButtonComponent={HeaderButton}>
                    <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={()=>{
                        navData.navigation.dispatch(DrawerActions.openDrawer());
                    }}
                    color="white"
                    />
                </HeaderButtons>
            )
        },
        headerTitleStyle:{
            fontFamily: "open-sans-bold"
        },
        headerBackTitleStyle:{
            fontFamily: "open-sans"
        }
    }
}

export default FoodCategoriScreen
