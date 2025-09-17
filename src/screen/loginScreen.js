import {View, Text, Button, Image, Pressable, TextInput} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, HoltwoodOneSC_400Regular } from "@expo-google-fonts/holtwood-one-sc";
import LoginScreen from "./loginScreen.js";
import styles from '../style/style.js';

export default function StartScreen({navigation}){
    

    return( 
        <LinearGradient
        colors={["#abadadff", "#ffffffff"]}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.gradient}
        >
            <View style={styles.tela}> 

                <View style= {styles.containerLoginImage}>
                    <Image
                    source={require("../../assets/login_img.png")}
                    />
                </View>

                <View style={styles.containerTitleLogin}>
                    <Text style={styles.loginTitle}>
                        Login
                    </Text>
                </View>

                <View style={styles.textInput1}>
                    <TextInput
                    placeholder="E-MAIL"
                    style={styles.textInputLogin}
                    placeholderTextColor={"#144273"}
                    />
                </View>

                
                <View style={styles.textInput2}>
                   <TextInput
                    placeholder="SENHA"
                    style={styles.textInputLogin}
                    placeholderTextColor={"#144273"}
                    />
                </View>

                <View style={styles.buttonStart}> 
                    <Pressable
                    onPress={() => navigation.navigate("Home")} 
                    style={{width: 400, height: 70}}
                    >
                        <Text style={styles.textButton}>
                            Entrar
                        </Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    )
}