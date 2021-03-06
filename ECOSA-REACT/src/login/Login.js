// @flow
import * as React from "react";
import {StyleSheet, Image, View, TextInput, SafeAreaView} from "react-native";
import {H1, Button, Text, Content} from "native-base";
import {Constants} from "expo";

import Mark from "./Mark";

import {Images, WindowDimensions, Field, Small, Styles} from "../components";
import {AnimatedView} from "../components/Animations";
import type {ScreenProps} from "../components/Types";

import variables from "../../native-base-theme/variables/commonColor";

export default class Login extends React.Component<ScreenProps<>> {

    password: TextInput;

    setPasswordRef = (input: TextInput) => this.password = input._root
    goToPassword = () => this.password.focus()
    signIn = () => this.props.navigation.navigate("Walkthrough")
    signUp = () => this.props.navigation.navigate("SignUp")

    render(): React.Node {
        return (
            <View style={styles.container}>
                <Image source={Images.login} style={styles.image} />
                <SafeAreaView style={StyleSheet.absoluteFill}>
                    <Content style={[StyleSheet.absoluteFill, styles.content]}>
                        <AnimatedView style={styles.innerContent}>
                            <View style={styles.logo}>
                                <View>
                                    <Mark />
                                    <H1 style={styles.title}>Get Started!</H1>
                                </View>
                            </View>
                            <View>
                                <Field
                                    label="Username"
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                    onSubmitEditing={this.goToPassword}
                                    inverse
                                />
                                <Field
                                    label="Password"
                                    secureTextEntry
                                    autoCapitalize="none"
                                    returnKeyType="go"
                                    textInputRef={this.setPasswordRef}
                                    onSubmitEditing={this.signIn}
                                    last
                                    inverse
                                />
                                <View>
                                    <View>
                                        <Button primary full onPress={this.signIn}>
                                            <Text>Sign In</Text>
                                        </Button>
                                    </View>
                                    <View>
                                        <Button transparent full onPress={this.signUp}>
                                            <Small style={Styles.whiteText}>Don&apos;t have an account? Sign Up</Small>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </AnimatedView>
                    </Content>
                </SafeAreaView>
            </View>
        );
    }
}

const {height, width} = WindowDimensions;
const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        height,
        width
    },
    content: {
        flexGrow: 1
    },
    innerContent: {
        height: height - Constants.statusBarHeight,
        justifyContent: "flex-end"
    },
    logo: {
        marginVertical: variables.contentPadding * 2,
        alignItems: "center"
    },
    title: {
        marginVertical: variables.contentPadding * 2,
        color: "white",
        textAlign: "center"
    }
});
