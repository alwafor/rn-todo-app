import React, {useState} from 'react'
import {Button, StyleSheet, View} from "react-native"
import {ITodo} from "../types/todoTypes"
import {THEME} from "../theme"
import {AppCard} from "../components/ui/Card"
import {EditModal} from "../components/EditModal"
import {AppTextBold} from "../components/ui/AppTextBold"

interface IProps {
    goBack: Function,
    onRemove: Function,
    todo: ITodo,
    onSave: Function
}

export const TodoScreen: React.FC<IProps> = ({goBack, onRemove, onSave, todo}) => {
    const [modal, setModal] = useState(false)

    const saveHandler = (title: string) => {
        onSave(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal onSave={saveHandler} value={todo.title} visible={modal} onCancel={() => setModal(false)}/>
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <Button title={'Ред.'} onPress={() => setModal(true)}/>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title={"Назад"} color={THEME.GRAY_COLOR} onPress={() => goBack()}/>
                </View>
                <View style={styles.button}>
                    <Button title={"Удалить"} color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}/>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    },
    card: {
        padding: 15,
        marginBottom: 20
    }
})

