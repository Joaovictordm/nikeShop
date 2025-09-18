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
        colors={["#effaf9ff", "#adb8b1ff"]}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.gradient}
        >
            <View style={styles.tela}> 
                <View style = {styles.iconeNike}>
                    <Image 
                    source={require("../../assets/logo_nike.png")}
                    style={styles.criaDoGTASanAndreas}
                    />
                </View>

                <View style={styles.hornet}>
                    <Image
                    source={require("../../assets/silksong.jpg")}
                    style={{resizeMode: "cover", width: 50, height: 50, borderRadius: 100}}
                    />
                </View>

                <View style={styles.silksong2}>
                    <View style={styles.containerTennis}>
                        <View style={styles.starWarseMuitoRuim}>
                            <Image
                            source={require("../../assets/thumb_tennis_1.png")}
                            style={{marginTop: 15}}
                            />
                        </View>
                    </View>

                    <View style={styles.containerTennis}>
                        <View style={styles.starWarseMuitoRuim1}>
                            <Image
                            source={require("../../assets/thumb_tennis_2.png")}
                            />
                        </View>
                    </View>

                    <View style={styles.containerTennis}> 
                        <View style={styles.starWarseMuitoRuim1}>
                            <Image
                            source={require("../../assets/thumb_tennis_3.png")}
                            />
                        </View>
                    </View>
                </View>

                <View style= {styles.homeImageTenis1}>
                    <Image
                    source={require("../../assets/tennis_2.png")}
                    style = {{resizeMode: "contain", height: 250}}
                    />
                </View>
                
                    <View style={styles.containerTitle1}>
                        <Text style={styles.title1}>
                            Kyrie Infinity 
                        </Text>
                            <Text style={styles.homeTitle2}>
                            Calçados para asquete
                        </Text>
                            
                    </View>

                    <View style = {styles.loremIpsumContainer}>
                        <Text style={styles.loremIpsumHome}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua et dolore magna aliqua.
                        </Text>
                    </View>

                    <View style={styles.gragasDoLol}>
                        <Text style={{fontFamily: "IstokWeb_400Regular", color: "#144273", fontSize: 40, fontFamily: "IstokWeb_400Regular"}}>
                            Preço
                        </Text>
                    </View>

                    <View style={styles.gostoDeJogarDeKayn}>
                        <Text style={{fontFamily: "IstokWeb_400Regular", color: "#144273", fontFamily: "HoltwoodOneSC_400Regular", fontSize: 50}}>
                            $799
                        </Text>
                    </View>

                    <View style={{ position: "absolute", bottom: 130, flexDirection: "row", right: 60, width: 100, height: 40, justifyContent: "space-between"}}>
                        <View style={styles.iconeContainer}>
                            <Image
                            source={require("../../assets/share_icon.png")}
                            />
                        </View>

                            <View style={styles.iconeContainer1}>
                            <Image
                            source={require("../../assets/shopping_bag_icon.png")}
                            />
                        </View>
                    </View>
               
            </View>
        </LinearGradient>
    )
}