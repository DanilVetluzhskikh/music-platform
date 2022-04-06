import styled from 'styled-components';

interface ProgressContainerProps {
    sound: boolean;
}

export const ProgressContainer = styled.div<ProgressContainerProps>`
    display: flex;
    margin-left: ${({ sound, }) => sound ? 'auto' : '20px'};
    gap: 10px;
    margin-right: 50px;
    align-items: center;
`;

export const ProgressBar = styled.input`
    margin-right: 20px;
    width: 200px;
`;

export const ProgressNumbers = styled.span`
    font-size: 22px;
    width: 100px;
`;