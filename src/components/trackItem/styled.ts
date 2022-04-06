import styled from 'styled-components';
import { widthLeftBar } from '@constants/size';

interface TrackItemContainerProps {
    open: boolean;
}

export const TrackItemContainer = styled.div<TrackItemContainerProps>`
    transition: all 300ms ease-in;
    width: ${({ open, }) => open ? `calc(100% - ${widthLeftBar})` : '100%'};
`;