import styled from 'styled-components';
import { heightTopBar, widthLeftBar } from '@constants/size';

interface ChilderContainerProps {
    open: boolean
}

export const ChilderContainer = styled.div<ChilderContainerProps>`
    position: relative;
    top: ${heightTopBar};
    left: ${({ open, }) => open ? widthLeftBar : '0px'};
    transition: all 300ms ease-in;
    display: flex;
`;