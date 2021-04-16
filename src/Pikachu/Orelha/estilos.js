import { StyleSheet } from 'react-native';

export default function (direita) {
    return StyleSheet.create({
        orelha: {
            transform: [{scaleX: direita ? -1 : 1 }, {rotate: "-5deg"}]
        },
        ponta: {
            width: 0,
            height: 0,

            backgroundColor: "transparent",

            borderStyle: "solid",
            borderRightWidth: 120,
            borderTopWidth: 75,
            borderRightColor: "transparent",
            borderTopColor: "#000200",

            transform: [{rotate: "270deg"}]
        },
        marca: {
            width: 135,
            height: 135,

            marginTop: -50,
            marginLeft: 23,

            backgroundColor: "#FCD458",

            borderRadius: 77,
        }
    });
}
