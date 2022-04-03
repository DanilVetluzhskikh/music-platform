import styled from 'styled-components';

interface ContainerProps {
    open: boolean;
}

export const ArrowContainer = styled.div`
    width: 60px;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    gap: 10px;
`;

export const ArrowItem = styled.button<ContainerProps>`
    color: #c4c4c4;
    cursor: ${({ open, }) => open ? 'pointer' : 'default'};
    background: black;
    border-radius: 50px;
    outline: none;
    border: none;
    padding: 3px;

    &:hover {
        color: ${({ open, }) => open && 'white'};;
    }
`;

export const SignContainer = styled.div`
    display: flex;
    margin-right: 20px;
    gap: 15px;
`;

export const Btn = styled.button`
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1)
    }
`;

export const SignIn = styled(Btn)`
    background: white;
    color: black;
    border-radius: 16px;
    padding: 5px 10px;
    border: none
`;

export const SignUp = styled(Btn)`
    border: none;
    background: none;
    color: white;
`;