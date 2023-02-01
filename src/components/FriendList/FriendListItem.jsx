import PropTypes from "prop-types";

import { FriendsListItem } from "./FriendListItem.styled";

export const FriendListItem = ({avatar, name, isOnline}) => (
<FriendsListItem isOnline={isOnline}>
  <span className="status"></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</FriendsListItem>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}