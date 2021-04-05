import React from "react";
import {View , Image, Text} from 'react-native';

import logoImg from "../../assets/logo.png";
import styles from "../detail/styles";
import Styles from "./styles";

export default function Incidents() {
    return(
        <View style={Styles.container}>
            <View style={Styles.header}>
                    <Image source={logoImg}></Image>
                    <Text style={styles.headerText}>
                        Total de:<Text styles={styles.HeaderTextBold}> 0 Casos </Text>   
                        </Text>    
            </View> 
            <Text style={styles.title}> Bem-Vindo </Text> 
            <Text style={styles.headerText}> Escolha um dos casos abaixo:</Text> 
        </View> 
        
    );
}