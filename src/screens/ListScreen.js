import React from 'react'
import { StyleSheet,View, Text,ScrollView, FlatList } from 'react-native';
import NameListItem from '../components/NameListItem';


const ListScreen = () =>{
    const names = [
        {
            name: 'Quan Rorbets',
            number: '149-236 8235',
            image: require('../../assets/quan.jpg'),
        },


        {
            name: 'Rissa Gardner',
            number: '190-312-3685',
            image: require('../../assets/carissa.jpg'),
        },
        {
            name: 'Cristal Lallure',
            number: '123-777-2445',
            image: require('../../assets/cristal.jpg'),
        },
        {
            name: 'Niko Valdes',
            number: '192-338-8847',
            image: require('../../assets/niko.jpg'),
        },
    
        {
            name: 'Milo Trevino',
            number: '133-123-6780',
            image: require('../../assets/milo.jpg'),
        },
        {
            name: 'Hazel Zquad',
            number: '180-487-7288',
            image: require('../../assets/hazel.jpg'),
        },
        {
            name: 'Trica Ikam',
            number: '187-780-5434',
            image: require('../../assets/trica.jpg'),
        },
    
    ];
    return (
        <View style={styles.container}>
            <FlatList 
                  data={names}
                  renderItem={({item}) => {
                      return (
                          <NameListItem
                             name={item.name}
                             number={item.number}
                             image={item.image}
                          
                          />
                      );
                  }}
                  keyExtractor={(item) =>item.number}
            
            />


        </View>
    )
};
export default ListScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})

