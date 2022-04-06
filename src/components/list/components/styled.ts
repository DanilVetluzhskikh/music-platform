import styled from 'styled-components';

export const CardItem = styled.div`
    width: 220px;
    height: 300px;
    background: #181818;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #c4c4c4;
    border-radius: 5px;
    -webkit-box-shadow: 1px 2px 12px 2px #000000;
    box-shadow: 1px 2px 12px 2px #000000;
    transition: all 300ms ease;

    &:hover{
        color: white;
        background: #2b2b2b;
        cursor: pointer;
    }
`;
export const Image = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 5px;
    object-fit: cover;
`;

export const ImageContainer = styled.div`
    margin-top: 20px;
    position: relative;
    overflow: hidden;
`;

export const Title = styled.h1`
    font-size: 18px;
    margin-top: 10px;
`;

export const Description = styled.span`
    font-size: 16px;
    margin-top: 10px;
`;
