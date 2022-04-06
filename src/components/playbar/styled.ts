import styled from 'styled-components';
import { widthLeftBar } from '@constants/size';

interface PlayBarContainerProps {
    open: boolean;
}

export const PlayBarContainer = styled.div<PlayBarContainerProps>`
    background: #474747;
    color:  white;
    width: ${({ open, }) => open ? `calc(100% - ${widthLeftBar})` : '100%'};
    height: 60px;
    position: fixed;
    transition: all 300ms ease-in;
    bottom: 0px;
    right: 0px;
    padding-left: 50px;
    display: flex;
    align-items: center;
    color: white;
`;

export const PlayBtn = styled.button`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 100px;
    background: black;
    cursor: pointer;
    color: white;
`;

export const PlayName = styled.span`
    font-size: 22px;
    margin-left: 15px;
`;