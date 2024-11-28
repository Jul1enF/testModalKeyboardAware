import { View, TextInput, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from "react-native";
import { RPH, RPW } from "./modules/dimensions"
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect, useRef } from "react";
import Modal from "react-native-modal"
import { KeyboardProvider } from "react-native-keyboard-controller";
import { KeyboardAwareScrollView, KeyboardToolbar } from "react-native-keyboard-controller";


export default function UserInformations() {


    const [firstname, setFirstname] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [error, setError] = useState('')
    const [modal1Visible, setModal1Visible] = useState(false)


    return (<>
        <KeyboardProvider>
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={[styles.contentBody]}
            bottomOffset={RPH(14)}
        >


            {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={RPH(14.5)} style={styles.body}>
            <ScrollView style={styles.body} contentContainerStyle={styles.contentBody}  > */}

            <View style={styles.topContainer}>
                <Text style={styles.title}>My informations</Text>
                <LinearGradient
                    colors={['#9dcb00', '#045400']}
                    locations={[0.05, 1]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.gradientLine}
                >
                </LinearGradient>
            </View>

            <Text style={styles.text1}>
                Change my firstname :
            </Text>
            <TextInput style={styles.input}
                onChangeText={(value) => {
                    setFirstname(value)
                    setError('')
                }}
                value={firstname}
                placeholder="Firstname"
                placeholderTextColor="#fbfff790"
                maxLength={28}>
            </TextInput>


            <Text style={styles.text1}>
                Changer my name :
            </Text>
            <TextInput style={styles.input}
                onChangeText={(value) => {
                    setName(value)
                    setError('')
                }}
                value={name}
                placeholder="Name"
                placeholderTextColor="#fbfff790"
                maxLength={28}>
            </TextInput>


            <Text style={styles.text1}>
                Change my email :
            </Text>
            <TextInput style={[styles.input, { marginBottom: 40 }]}
                onChangeText={(value) => {
                    setEmail(value)
                    setError('')
                }}
                value={email}
                keyboardType='email-address'
                autoCapitalize='none'
                placeholder="Email"
                placeholderTextColor="#fbfff790"
                maxLength={28}>
            </TextInput>

            <TouchableOpacity style={styles.btnTouchable} activeOpacity={0.8} onPress={() => setModal1Visible(true)}>
                <LinearGradient
                    colors={['#9dcb00', '#045400']}
                    locations={[0.05, 1]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.btnGradientContainer}
                >
                    <Text style={styles.text2}>Register</Text>
                </LinearGradient>
            </TouchableOpacity>


            <Modal
                isVisible={modal1Visible}
                style={styles.modal}
                backdropColor="rgba(0,0,0,0.9)"
                animationIn="slideInDown"
                animationOut="slideOutUp"
                statusBarTranslucent={true}
                pointerEvents="auto"
                onBackButtonPress={() => setModal1Visible(!modal1Visible)}
                onBackdropPress={() => setModal1Visible(!modal1Visible)}
            >
                <View style={styles.modalBody}>
                    <Text style={styles.text3}>Are you sure ?</Text>
                    <LinearGradient
                        colors={['#9dcb00', '#045400']}
                        locations={[0.05, 1]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.gradientLine2}
                    >
                    </LinearGradient>
                    <View style={styles.row1}>
                        <TouchableOpacity style={styles.btnTouchable} activeOpacity={0.8} onPress={() => setModal1Visible(false)}>
                            <LinearGradient
                                colors={['#9dcb00', '#045400']}
                                locations={[0.05, 1]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                style={styles.btnGradientContainer}
                            >
                                <Text style={styles.text2}>Cancel</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnTouchable} activeOpacity={0.8} onPress={() => console.log("Register")}>
                            <LinearGradient
                                colors={['#9dcb00', '#045400']}
                                locations={[0.05, 1]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                style={styles.btnGradientContainer}
                            >
                                <Text style={styles.text2}>Register</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>



            {/* </ScrollView>
        </KeyboardAvoidingView> */}


        </KeyboardAwareScrollView>
        </KeyboardProvider>

    </>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#f9fff4",
    },
    contentBody: {
        paddingLeft: RPW(4),
        paddingRight: RPW(4),
        paddingBottom: RPW(6),
        paddingTop: RPW(5),
        alignItems: "center",
        backgroundColor: "#f9fff4",
    },
    topContainer: {
        alignItems: "flex-start",
        width: "100%",
        marginBottom: 25,
    },
    title: {
        color: "#19290a",
        fontSize: 24,
        fontWeight: "450",
        marginBottom: 9,
        marginLeft: 5
    },
    gradientLine: {
        width: "95%",
        height: 4,
        marginBottom: 15,
    },
    text1: {
        color: "#19290a",
        fontSize: RPW(5),
        fontWeight: "350",
        marginBottom: 13
    },
    input: {
        width: "100%",
        backgroundColor: "#2e6017",
        color: "white",
        borderRadius: 5,
        marginBottom: 25,
        paddingLeft: 8,
        fontSize: RPW(5.3),
        paddingBottom: 7,
        paddingTop: 7,
    },
    btnTouchable: {
        height: RPW(12),
        marginTop: 10,
    },
    btnGradientContainer: {
        flex: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: RPW(5),
        paddingRight: RPW(5),
        minWidth: RPW(34)
    },
    text2: {
        color: "white",
        fontSize: RPW(5.4),
        fontWeight: "500",
        textAlign: "center"
    },
    text3: {
        color: "#19290a",
        fontSize: RPW(5.4),
        fontWeight: "500",
        textAlign: "center"
    },
    modal: {
        alignItems: "center",
        justifyContent : "center",
       flex : 1,
        position : "absolute",
        top : RPH(0),
        left : RPW(0)
    },
    modalBody: {
        height: RPH(35),
        width: RPW(90),
        borderRadius: 10,
        paddingTop: RPH(5),
        paddingBottom: RPH(5),
        paddingLeft: RPW(4),
        paddingRight: RPW(4),
        backgroundColor: "#e6eedd",
        // position: "absolute",
        // bottom: RPH(20),
        justifyContent: "space-between",
        alignItems: "center"
    },
    gradientLine2: {
        width: "90%",
        height: 4,
    },
    row1: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
    },
})