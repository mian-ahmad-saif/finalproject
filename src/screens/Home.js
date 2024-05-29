import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { foodCardData, Starterdata, Lunchdata1 } from "../constants/index";
import withThemeStyles from './withThemeStyles'; // Adjust the path accordingly
import styles    from '../styles/HomeStyles';
class Home extends Component {
    static contextType = NavigationContext;

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleProductDetail = (product) => {
        const navigation = this.context;
        navigation.navigate('Product Detail', { product });
    };

    renderItems = (items) => {
        return items.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
                <Text style={styles.Text}>Price: {item.price}</Text>
                <Text style={styles.Text}>Name: {item.name}</Text>
                <TouchableOpacity onPress={() => this.handleProductDetail(item)}>
                    <Image
                        style={styles.image}
                        source={item.image}
                    />
                </TouchableOpacity>
            </View>
        ));
    };

    renderSection = (title, data) => (
        <View style={styles.section}>
            <Text style={styles.TextContainer}>{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                {this.renderItems(data)}
            </ScrollView>
        </View>
    );

    render() {
        const { bgColor, textColor } = this.props.themeStyles;
        return (
            <ScrollView style={[styles.container, bgColor]}>
                {this.renderSection('BreakFast', Starterdata)}
                {this.renderSection('Lunch', Lunchdata1)}
                {this.renderSection('Dinner', foodCardData)}
            </ScrollView>
        );
    }
}

export default withThemeStyles(Home);

// const styles = StyleSheet.create({
//     container: {
//         paddingHorizontal: 9,
//         paddingVertical: 2,
//         paddingBottom: 10,
//     },
//     section: {
//         marginVertical: 10,
//     },
//     scrollView: {
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     itemContainer: {
//         marginRight: 10,
//     },
//     image: {
//         borderBottomRightRadius: 5,
//         borderBottomLeftRadius: 5,
//         borderRadius: 5,
//         height: 150,
//         width: 250,
//     },
//     TextContainer: {
//         fontSize: 20,
//         fontWeight: "bold",
//     },
//     Text: {
//         fontSize: 15,
//         fontWeight: "bold",
//         marginTop: 5,
//         marginLeft: 5,
//     },
// });