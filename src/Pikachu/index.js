import React from 'react';

import { Tela, Orelhas, Olhos, OlhoDireito, Bochechas } from './estilos';
import Orelha from './Orelha';
import Olho from './Olho';
import Nariz from './Nariz';
import Bochecha from './Bochecha';
import Boca from './Boca';

export default function Pikachu() {
    return <Tela>
        <Orelhas>
            <Orelha />
            <Orelha direita />
        </Orelhas>
        <Olhos>
            <Olho />
            <OlhoDireito />
        </Olhos>
        <Nariz />
        <Bochechas>
            <Bochecha />
            <Bochecha />
        </Bochechas>
        <Boca />
    </Tela>
}
