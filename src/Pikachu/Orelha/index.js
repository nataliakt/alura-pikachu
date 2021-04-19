import React from 'react';

import { OrelhaExterna, Ponta, Marca } from './estilos';

export default function Orelha({ direita = false }) {
    return <OrelhaExterna direita={direita}>
        <Ponta />
        <Marca />
    </OrelhaExterna>
}
