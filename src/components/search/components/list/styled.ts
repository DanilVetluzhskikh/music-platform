import styled from 'styled-components';
import { widthLeftBar } from '@constants/size';

interface ListItemsContainerProps {
    open: boolean;
}

export const ListItemsContainer = styled.div<ListItemsContainerProps>`
    width: ${({ open, }) => open ? `calc(100% - ${widthLeftBar})` : '100%'};
    transition: all 300ms ease-in;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
`;

export const Item = styled.div`
    background: black;
    color: white;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 300ms ease-in;
    &:hover {
        background: #f3f3f3;
        color: black;
    }
`;

export const ItemTitle = styled.h1`
    font-size: 22px;
    margin-left: 20px;
`;

export const ItemImg = styled.img`
    width: 40px;
    height: 40px;
`;