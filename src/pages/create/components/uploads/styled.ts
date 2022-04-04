import styled from 'styled-components';

export const UploadContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    color: #b1b1b1;
    justify-content: space-between;
    width: 100%;
    border: 1px solid #b1b1b1;
    padding: 10px;
    border-radius: 3px;

    &:hover {
        color: black;
        border-color: black;
    }
`;

export const InputFile = styled.input`
    display: none;
`;

export const Img = styled.img`
    width: 150px;
    height: 150px;
`;