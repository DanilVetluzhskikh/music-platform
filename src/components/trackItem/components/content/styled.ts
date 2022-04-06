import styled from 'styled-components';

export const TrackItemContent = styled.div`
    display: flex;
`;

export const TrackItemContentWrapper = styled.div`
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, #1D1D1D 4%, rgba(20,20,20,1) 24%);
    height: 450px;
    padding: 50px 0px 0px 50px;
    display: flex;
    position: relative;
`;

export const TrackItemImg = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    -webkit-box-shadow: 1px 2px 12px 2px #000000;
    box-shadow: 1px 2px 12px 2px #000000;
`;

export const TrackItemTextContainer = styled.div`
    color: white;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TrackItemText = styled.span`
    font-size: 36px;
`;

export const TrackItemTitle = styled.h1`
    font-size: 56px;
`;

export const TrackItemArtist = styled.h4`
    font-size: 24px;
`;

export const TrackItemListens = styled.span`
    font-size: 18px;
    color: #c4c4c4;
`;

export const TrackItemBtnsContainer = styled.div`
    position: absolute;
    right: 50px;
    display: flex;
    gap: 10px;
`;

const commonBtn = styled.button`
    border: none;
    color: white;
    outline: none;
    border-radius: 100px;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: #c4c4c4;
    }
`;

export const TrackItemBtnPlay = styled(commonBtn)`
    background: #1BD760;
`;

export const TrackItemBtnDelete = styled(commonBtn)`
    background: red;
`;