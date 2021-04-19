import { StyleSheet } from 'react-native';
import styled from 'styled-components';

import Olho from './Olho';

export const OlhoDireito = styled(Olho)`
    transform: scaleX(-1);
`;

export default StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#FCD458",
    },
    orelhas: {
        flexDirection: "row",
        justifyContent: "space-between",

        width: 350,
    },
    olhos: {
        flexDirection: "row",
        justifyContent: "space-between",

        width: 200,

        marginTop: 30,
    },
    bochechas: {
        flexDirection: "row",
        justifyContent: "space-between",

        width: 340,
    }
});
