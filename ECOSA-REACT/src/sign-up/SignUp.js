// @flow
import * as React from "react";
import {View, Image, StyleSheet, TextInput} from "react-native";
import {Button, Header, Left, Right, Body, Icon, Title, Text, Content} from "native-base";
import {Constants} from "expo";

import {Container, Images, Field, Styles, SingleChoice, WindowDimensions} from "../components";
import type {ScreenProps} from "../components/Types";

import variables from "../../native-base-theme/variables/commonColor";

export default class SignUp extends React.Component<ScreenProps<>> {

    username: TextInput;
    password: TextInput;

    setUsernameRef = (input: TextInput) => this.username = input._root
    goToUsername = () => this.username.focus()
    setPasswordRef = (input: TextInput) => this.password = input._root
    goToPassword = () => this.password.focus()
    back = () => this.props.navigation.navigate("Login")
    signIn = () => this.props.navigation.navigate("Walkthrough")

    render(): React.Node {
        return (
            <Container safe>
                <Image source={Images.signUp} style={style.img} />
                <Content style={Styles.flexGrow}>
                    <Header noShadow>
                        <Left>
                            <Button onPress={this.back} transparent>
                                <Icon name="close" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Sign Up</Title>
                        </Body>
                        <Right />
                    </Header>
                    <View style={style.row}>
                        <Button transparent block style={style.btn}>
                            <Icon name="logo-twitter" />
                            <Text style={Styles.textCentered}>Connect with</Text>
                            <Text style={Styles.textCentered}>Twitter</Text>
                        </Button>
                        <Button transparent block style={[style.btn, style.facebook]}>
                            <Icon name="logo-facebook" />
                            <Text style={Styles.textCentered}>Connect with</Text>
                            <Text style={Styles.textCentered}>Facebook</Text>
                        </Button>
                    </View>
                    <Button transparent block style={[style.btn, style.email]}>
                        <Icon name="ios-mail-outline" style={style.icon} />
                        <Text>or use your email address</Text>
                    </Button>
                    <View style={Styles.form}>
                        <Field
                            label="Name"
                            onSubmitEditing={this.goToUsername}
                            returnKeyType="next"
                        />
                        <Field
                            label="Username"
                            textInputRef={this.setUsernameRef}
                            onSubmitEditing={this.goToPassword}
                            returnKeyType="next"
                        />
                        <Field
                            label="Password"
                            secureTextEntry
                            textInputRef={this.setPasswordRef}
                            onSubmitEditing={this.signIn}
                            returnKeyType="go"
                        />
                        <Field label="Gender">
                            <SingleChoice labels={["Male", "Female"]} />
                        </Field>
                    </View>
                </Content>
                <Button primary block onPress={this.signIn} style={{ height: variables.footerHeight }}>
                    <Text>CONTINUE</Text>
                </Button>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    img: {
        ...StyleSheet.absoluteFillObject,
        width: WindowDimensions.width,
        height: WindowDimensions.height - Constants.statusBarHeight,
        top: Constants.statusBarHeight
    },
    row: {
        flexDirection: "row"
    },
    btn: {
        flex: 1,
        margin: 0,
        borderRadius: 0,
        justifyContent: "center",
        alignItems: "center",
        height: 125,
        flexDirection: "column"
    },
    facebook: {
        borderLeftWidth: variables.borderWidth,
        borderColor: "white"
    },
    email: {
        borderTopWidth: variables.borderWidth,
        borderBottomWidth: variables.borderWidth,
        borderColor: "white",
        flexDirection: "row",
        height: 87
    },
    icon: {
        color: "white",
        marginRight: 5
    }
});
