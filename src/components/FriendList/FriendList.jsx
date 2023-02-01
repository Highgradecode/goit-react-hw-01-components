import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem"
import { FriendsList } from "./FriendList.styled";

export const FriendList = ({friends}) => (
<FriendsList>
    {friends.map((friend) => {
        return(
            <FriendListItem 
            avatar = {friend.avatar}
            name = {friend.name}
            isOnline = {friend.isOnline}
            key = {friend.id}
            />
        )
    })}
</FriendsList>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}