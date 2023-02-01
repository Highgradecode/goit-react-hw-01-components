import styled from "@emotion/styled";

export const FriendsListItem = styled.li`
display: flex;
align-items: center;
gap: 10px;
font-weight: 700;
font-size: 20px;
box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
padding: 15px;
margin-bottom: 15px;



.status{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => {
       return props.isOnline ? "green" : "red"
    }};
}

`