const PostUserCard = ({newUser}) => {
    return (
        <div className="newUserCard">
            <p>{newUser.name}</p>
            <p>{newUser.username}</p>
            <p>{newUser.email}</p>
            <i>{newUser.website}</i>
        </div>
    )
};

export default PostUserCard;