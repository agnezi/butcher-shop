import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SectionList
} from "react-native";
import Constants from "expo-constants";

import { ListItem } from './components'

const data = [
    {
        title: "Cortes bovinos",
        data: ["Miolo ou Coração de Alcatra com Gordura",
            "Contrafilé", "Filé Mignon", "Filé de Costela", "Capa de Entrecot", "Picanha", "Maminha da Alcatra", "Capa de Filé", "Coxão Mole", "Patinho", "Coxão Duro", "Lagarto", "Acém", "Coração da Paleta", "Peito", "Peixinho", "Raquete", "Costela do Dianteiro", "Bife de Vazio"]
    },
    {
        title: "Cortes suinos",
        data: ["Alcatra", "Barriga", "Bisteca", "Carré", "Copa lombo", "Costela", "Coxão-duro", "Coxão-mole", "Filé mignon", "Fraldinha", "Joelho", "Lombo", "Orelha", "Ossobuco", "Paleta", "Papada", "Patinho", "Pé", "Pernil", "Picanha", "Rabo", "Suã"]
    },
    {
        title: "Cortes de aves",
        data: ["Cabeça", "Coxinha da asa", "Meio da asa", "Asa", "Peito", "Filé de peito", "Filezinho", "Sobrecoxa", "Coxa", "Pescoço", "Dorso", "Sambiquira", "Pé"]
    },
];

const MealsList = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, section }) => <ListItem title={item} type={section.title} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16
    },
    header: {
        fontSize: 32,
        backgroundColor: "#f6f6f6"
    },
    title: {
        fontSize: 24
    }
})

export default MealsList