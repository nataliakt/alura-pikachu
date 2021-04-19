import styled from 'styled-components';

export const OrelhaExterna = styled.View`
    transform: rotate(-5deg) scaleX( ${({direita}) => direita ? -1 : 1 })
`;

export const Ponta = styled.View`
    width: 0;
    height: 0;

    backgroundColor: transparent;

    border-style: solid;
    border-right-width: 120px;
    border-top-width: 75px;
    border-right-color: transparent;
    border-top-color: #000200;

    transform: rotate(270deg);
`;

export const Marca = styled.View`
    width: 135px;
    height: 135px;

    margin: -50px 0 0 23px;

    background-color: #FCD458;

    border-radius: 77px;
`;
