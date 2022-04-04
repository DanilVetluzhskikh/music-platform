import styled from 'styled-components';
import { widthLeftBar } from '@constants/size';

interface CreateContainerProps {
    open: boolean
}

export const CreateContainer = styled.div<CreateContainerProps>`
    width: ${({ open, }) => open ? `calc(100% - ${widthLeftBar})` : '100%' };
    margin-top: 50px;
    display: flex;
    justify-content: center;
    transition: all 300ms ease-in;
`;

export const CreateWrapper = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px 50px 20px 50px;

    transition: all 300ms ease-in;

    background: #f3f3f3;
    width: 500px;
    border-radius: 5px;
`;

export const Title = styled.h1`
    font-weight: 300;
    font-size: 50px;
`;

export const SubmitBtn = styled.button`
    border: none;
    background: black;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 22px;
    cursor: pointer;
`;

export const Error = styled.span`
    color: red;
    font-size: 22px;
`;

export const Success = styled.span`
    color: green;
    font-size: 22px;
`;