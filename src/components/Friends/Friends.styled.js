import styled from "styled-components";

export const FriendItem = styled.li`
    width: 200px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding-top: 10px;
    border: thick solid #5DEEEE;
`;

export const FriendName = styled.p`
    font-weight: bold;
`;

export const FriendStatus = styled.span`
    position: absolute;
    left: 35px;
    top: 30px;
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
background-color: ${props => {
    switch (props.$variant) {
        case 'online':
            return 'green';
        case 'offline':
            return 'red'
    }
}}
`