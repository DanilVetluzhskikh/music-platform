import styled from 'styled-components';
import { heightTopBar, widthLeftBar } from '@constants/size';

interface ContainerProps {
    open: boolean;
}

export const NavbarContainer = styled.div`
    height: 100%;
`;

export const NavbarLeftContainer = styled.div<ContainerProps>`
    height: 100%;
    min-width: ${widthLeftBar};
    max-width: ${widthLeftBar};
    background: black;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    transition: all 300ms ease-in;

    left: ${({ open, }) => open ? '0px' : `-${widthLeftBar}`};
`;

export const NavbarTopContainer = styled.div<ContainerProps>`
    position: fixed;
    right: 0;
    top: 0;
    height: ${heightTopBar};
    background: #141414;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 300ms ease-in;

    width: ${({ open, }) => open ? `calc(100% - ${widthLeftBar})` : '100%'};
`;