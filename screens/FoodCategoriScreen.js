import React from 'react'
import { View, Text } from 'react-native'
import HeaderButton from '../components/HeaderButton'
import {
    HeaderButtons,
    Item,
  } from 'react-navigation-header-buttons';
import { HeaderTitle } from '@react-navigation/stack';
import { Platform } from 'react-native';
import color from '../constant/Color';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { DrawerActions } from '@react-navigation/native';
const FoodCategoriScreen = props=>{
    return(
        <View>
            <Text>Food</Text>
        </View>
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
