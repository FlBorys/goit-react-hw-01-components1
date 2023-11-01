import { FriendsList } from "./FriendCard.styled";
import { FriendCard } from "./FriendCard";
export const FriendList = ({ friends }) => {
    return(
       <FriendsList>
{friends.map(friend => (
        <FriendCard key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
      ))}
</FriendsList>
   ) 
}
