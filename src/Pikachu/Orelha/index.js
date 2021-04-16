import React from 'react';
import { View } from 'react-native';

import funcaoEstilos from './estilos';

export default function Orelha({ direita = false }) {
    const estilos = funcaoEstilos(direita);

    return <View style={estilos.orelha}>
        <View style={estilos.ponta} />
        <View style={estilos.marca} />
    </View>
}