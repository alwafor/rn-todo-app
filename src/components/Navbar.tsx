import React from 'react'
import {StyleSheet, View} from "react-native"
import {THEME} from "../theme"
import {AppTextBold} from "./ui/AppTextBold"

interface IProps {
    title: string
}

export const Navbar: React.FC<IProps> = ({title}) => {
    return (
        <View style={styles.navbar}>
            <AppTextBold style={styles.text}>
                {title}
            </AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    text: {
        color: "white",
        fontSize: 20
    }
})