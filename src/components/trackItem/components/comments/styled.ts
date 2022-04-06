import styled from 'styled-components';

export const CommentsContainer = styled.div`
margin-left: 40px;
margin-right: 40px;
display: flex;
flex-direction: column;
gap: 20px;
padding-bottom: 50px;
`;

export const Comment = styled.div`
color: white;
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 10px;
`;

export const CommentTextContainer = styled.div`
color: white;
display: flex;
flex-direction: column;
gap: 10px;
`;

export const CommentImage = styled.div`
color: white;
`;

export const CommentName = styled.span`
font-size: 32px;
`;

export const CommentText = styled.p`
font-size: 20px;
`;

export const CommentInput = styled.input`
border: none;
color: white;
background:none;
border-bottom: 1px solid white;
font-size: 20px;
min-height: 50px;
outline:none;
`;

export const CommentSubmit = styled.button`
width: 300px;
height: 50px;
background:black;
border: none;
border-radius: 5px;
font-size: 22px;
cursor: pointer;
color: #f3f3f3;
`;