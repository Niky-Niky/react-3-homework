function FriendsItem({key, avatar, name, isOnline}){
return(
    <li className = "item" id = {key}>
    <span className = "status">
    {isOnline ? "Online" : "Offline"}
    </span>
    <img className = "avatar" src = {avatar} alt="User avatar" width="48" />
    <p className = "name"> {name} </p>
</li>
);

};

export default FriendsItem;