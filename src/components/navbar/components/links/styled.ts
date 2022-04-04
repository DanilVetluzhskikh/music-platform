import styled from 'styled-components';

interface LinkContainerProps {
    exact: boolean;
}

export const LinksContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const LinkContainer = styled.div<LinkContainerProps>`
    display: flex;
    align-items: center;
    width: 200px;
    cursor: pointer;
    color: ${({ exact, }) => exact ? 'white' : '#c4c4c4'};

    &:hover {
        color: white;
    }
`;

export const LinkText = styled.span`
    margin-left: 20px;
    font-size: 22px;
`;