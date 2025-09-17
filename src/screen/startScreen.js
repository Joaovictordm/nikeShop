import {View, Text, Button, Image, Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, HoltwoodOneSC_400Regular } from "@expo-google-fonts/holtwood-one-sc";
import { IstokWeb_400Regular, IstokWeb_700Bold } from "@expo-google-fonts/istok-web";
import LoginScreen from "./loginScreen.js";
import styles from '../style/style.js';

export default function StartScreen({navigation}){
    const [fontsLoaded] = useFonts({
        HoltwoodOneSC_400Regular,
        IstokWeb_400Regular,
        IstokWeb_700Bold
    })

    if (!fontsLoaded){
        return null;
    }

    return( 
        <LinearGradient
        colors={["#11988E", "#38EF7D"]}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.gradient}
        >
            <View style={styles.tela}> 
                <View style = {styles.containerStartImage}>
                    <Image 
                    source={require("../../assets/logo_nike.png")}
                    style={styles.startImage}
                    />
                </View>

                <View style= {styles.imageTenis}>
                    <Image
                    source={require("../../assets/tennis_2.png")}
                    />
                </View>

                <View style={styles.containerTitle1}>
                    <Text style={styles.title1}>
                        Summer 
                    </Text>
                     <Text style={styles.title1}>
                        Collections
                    </Text>
                     <Text style={styles.titleDate1}>
                        2022
                    </Text>
                </View>

                <View style = {styles.loremIpsumContainer}>
                    <Text style={styles.loremIpsumText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua et dolore magna aliqua.
                    </Text>
                </View>

                <View style={styles.buttonStart}> 
                    <Pressable
                    onPress={() => navigation.navigate("login")} 
                    style={{width: 400, height: 70}}
                    >
                        <Text style={styles.textButton}>
                            Começar
                        </Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    )
}