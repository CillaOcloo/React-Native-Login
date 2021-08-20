import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {MaterialIcons,MaterialCommunityIcons,SimpleLineIcons,} from '@expo/vector-icons';

const NameListItem  =({ name, number,image })  =>{
    return (
        <View style ={styles.container}>
            <View style ={styles.imageContainer}>
                <Image source ={image} style ={styles.image}/>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.name} numberofLines={1}>
                    {name}
                </Text>
                <Text style={styles.number}>{number}</Text>
            </View>

            <View style={styles.iconsContainer}>
				<View>
					<MaterialIcons name="phone" size={26} color="#3bacfd" />
				</View>

				<View>
					<MaterialCommunityIcons
						name="message-processing"
						size={26}
						color="#3bacfd"
					/>
				</View>

				<View>
					<SimpleLineIcons
						name="options-vertical"
						size={22}
						color="grey"
					/>
				</View>
                </View>

           

        </View>
    )
};
export default NameListItem;
const styles= StyleSheet.create({
    container: {
        height:100,
        flex: 1,
        flexDirection:'row',
        alignItems:'center'
        
    },
    
    imageContainer:{
        flex: 0.3,
        justifyContent: 'center',
        alignItems:'center',

    },
    image: {
		width: 60,
		height: 60,
		borderRadius: 60,
       
	},
    detailsContainer:{
        flex:0.4,
        paddingLeft: 7,
    },
    
    name: {
		fontSize: 19,
		fontWeight: 'bold',
        
	},
	number: {
		color: '#0f0f0f',
		fontSize: 14,
	},
    iconsContainer:{
        flexDirection:'row',
        flex: 0.4,
        justifyContent:'space-around',
    }

    
})