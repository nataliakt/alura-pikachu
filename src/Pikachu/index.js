import React from 'react';
import { View } from 'react-native';

import estilos from './estilos';
import Orelha from './Orelha';
import Olho from './Olho';
import Nariz from './Nariz';
import Bochecha from './Bochecha';
import Boca from './Boca';

export default function Pikachu() {
    return <View style={estilos.tela}>
        <View style={estilos.orelhas}>
            <Orelha />
            <Orelha direita />
        </View>
        <View style={estilos.olhos}>
            <Olho />
            <Olho estilosExtra={estilos.olhoDireito} />
        </View>
        <Nariz />
        <View style={estilos.bochechas}>
            <Bochecha />
            <Bochecha />
        </View>
        <Boca />
    </View>
}
