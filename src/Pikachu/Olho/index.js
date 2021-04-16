import React from 'react';
import { View } from 'react-native';

import estilos from './estilos'

export default function Olho({ estilosExtra }) {
    return <View style={[estilos.olho, estilosExtra]} >
        <View style={estilos.brilho} />
    </View>
}
