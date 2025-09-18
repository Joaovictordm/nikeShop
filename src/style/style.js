import { StyleSheet } from "react-native";
import { HoltwoodOneSC_400Regular } from "@expo-google-fonts/holtwood-one-sc";
import { IstokWeb_400Regular, IstokWeb_700Bold } from "@expo-google-fonts/istok-web";

const styles = StyleSheet.create({
   tela: {
    flex: 1,
        
   },
   gradient: {
    flex: 1
   },
   title1: {
    color: "#144273",
    fontSize: 40,
    fontFamily: "HoltwoodOneSC_400Regular"
   },
   titleDate1: {
    color: "#E1E0E0",
    fontSize: 40,
    fontFamily: "HoltwoodOneSC_400Regular"
   },
   containerTitle1:{
      position: "absolute",
      bottom: 420,
      left: 40
   },

   startImage:{
    height: 70,
    width: 100,
    marginTop: 40,
    marginLeft: 10,
    resizeMode: "contain",
    tintColor: "#ffffffff"
   },
   containerStartImage:{
      height: 120,
      width: 120,
      position: "absolute",
      top: 10,
      left: 20
   },
   imageTenis: {
      alignItems: "center",
      position: "absolute",
      top: 150,
      alignSelf: "center"
   },
   loremIpsumContainer: {
      position: "absolute",
      bottom: 300,
      width: 420,
      left: 40
   },
   loremIpsumText: {
      fontFamily: "IstokWeb_400Regular",
      color: "#E1E0E0",
      fontSize: 24,
      textAlign: "justify",
      lineHeight: 34

   },
   buttonStart:{
      position: "absolute",
      bottom: 150,
      alignSelf: "center",
      width: 400,
      height: 70,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F2C94C",
      elevation: 4,
      borderWidth: 0.1,
      
   },
   textButton:{
      color: "#E1E0E0",
      fontFamily: "IstokWeb_400Regular",
      fontSize: 30,
      alignSelf: "center",
      marginTop: 15,
      fontFamily: "IstokWeb_400Regular",
   },
   containerLoginImage:{
      position: "absolute",
      left: 59,
      top: 160
   },
   containerTitleLogin: {
      position: "absolute",
      alignSelf: "center", 
      top: 440
   },
   loginTitle:{
      fontFamily: "HoltwoodOneSC_400Regular",
      color: "#144273",
      fontSize: 30
   },
   textInput1:{
      position: "absolute",
      alignSelf: "center",
      top: 550,
      width: 400,
      height: 70,
      justifyContent:"center",
      elevation: 4,
      backgroundColor: "#E1E0E0",
      borderRadius: 7
   },
   textInput2:{
      position: "absolute",
      alignSelf: "center",
      top: 650,
      width: 400,
      height: 70,
      justifyContent: "center",
      elevation: 4,
      backgroundColor: "#E1E0E0",
      borderRadius: 7
   },
   textInputLogin:{
      marginLeft: 20
   },
   homeTitle2:{
    color: "#144273",
    fontSize: 19,
    fontFamily: "HoltwoodOneSC_400Regular"
   },
   loremIpsumHome:{
      fontFamily: "IstokWeb_400Regular",
      color: "#144273",
      fontSize: 24,
      textAlign: "justify",
      lineHeight: 34
   },
   homeImageTenis1: {
      alignItems: "center",
      position: "absolute",
      top: 300,
      alignSelf: "center"
   },
   silksong2:{
      
      height: 150,
      flexDirection: "row",
      position: "absolute",
      top: 150,
      alignSelf: "center"
   },
   containerTennis:{
      width: 140,
   },
   starWarseMuitoRuim:{
      height: 130,
      alignItems: "center",
      position: "absolute",
      top: 10,
      alignSelf: "center",
      backgroundColor: "#F2C94C",
      borderRadius: 10
   },
     starWarseMuitoRuim1:{
      height: 130,
      alignItems: "center",
      position: "absolute",
      top: 10,
      alignSelf: "center",
      backgroundColor: "#cac7c7ff",
      borderRadius: 10
   },
   hornet: {
      position: "absolute",
      top: 64,
      borderWidth: 1,
      borderRadius: 100,
      right: 30
   },
   iconeNike:{
      height: 120,
      width: 120,
      position: "absolute",
      top: 10,
      alignSelf: "center"
   },
    criaDoGTASanAndreas:{
    height: 70,
    width: 100,
    marginTop: 40,
    marginLeft: 10,
    resizeMode: "contain",
    tintColor: "#144273",
    
   },
   iconeContainer:{
      borderRadius: 100,
      width: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#144273",
      elevation: 2,
      borderWidth: 0.1
      

   },
    iconeContainer1:{
     borderRadius: 100,
     width: 40,
     justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2ED982",
    elevation: 2,
      borderWidth: 0.1
   },
   gostoDeJogarDeKayn:{
      position: "absolute",
      bottom: 180,
      left: 40
   },
   gragasDoLol:{
      position: "absolute",
      bottom: 240,
      left: 40
      
   }
})

export default styles;