import React from 'react';

import { OlhoExterno, Brilho } from './estilos'

export default function Olho({ style }) {
    return <OlhoExterno style={style} >
        <Brilho />
    </OlhoExterno>
}
