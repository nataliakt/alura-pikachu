import styled from 'styled-components';

import Olho from './Olho';

export const Tela = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: #FCD458;
`;

export const Orelhas = styled.View`
    flex-direction: row;
    justify-content: space-between;

    width: 350px;
`;

export const Olhos = styled.View`
    flex-direction: row;
    justify-content: space-between;

    width: 200px;

    margin-top: 30px;
`;

export const OlhoDireito = styled(Olho)`
    transform: scaleX(-1);
`;

export const Bochechas = styled.View`
    flex-direction: row;
    justify-content: space-between;

    width: 340px;
`;
