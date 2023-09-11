import friends from "../friends.json";
import FriendsItem from "../FriendsItem/FriendsItem";

function FriendsList(){
return(
 <ul>
      {friends.map((friend) => {
        return <FriendsItem key = {friend.id} avatar = {friend.avatar} name = {friend.name} isOnline = {friend.isOnline}/>
     })}
    
 </ul>  
    
);
};

export default FriendsList;