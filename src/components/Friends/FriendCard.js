import { FriendItem, FriendName, FriendStatus } from "./Friends.styled";
export const FriendCard = ({ id, avatar, name, isOnline }) => {
      return (
                  <FriendItem key={id}>
                  <FriendStatus $variant={`${isOnline ? "online" : "offline"}`}></FriendStatus>
  <img className="avatar" src={avatar} alt= "User avatar" width="48" />
  <FriendName>{name}</FriendName>
</FriendItem> 
      )
}