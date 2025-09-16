import {View, Text, Button} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from '../style/style.js';

export default function StartScreen(){
    return( 
        <LinearGradient
        colors={["#11988E", "#38EF7D"]}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.gradient}
        >
            <View style={styles.tela}> 
                <Text style={styles.title1}>
                    Summer Collections
                </Text>
            </View>
        </LinearGradient>
    )
}