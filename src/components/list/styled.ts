import styled from 'styled-components';
import { widthLeftBar } from '@constants/size';

interface ListContainerProps {
    open: boolean
}

export const ListContainer = styled.div<ListContainerProps>`
    width: ${({ open, }) => open ? `calc(100% - ${widthLeftBar})` : '100%'};
    display: flex;
    flex-direction: row;
    padding-left: 50px;
    padding-top: 50px;
    flex-wrap: wrap;
    gap: 30px;
    transition: all 300ms ease-in;
`;