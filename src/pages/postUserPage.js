import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserAction } from "../redux/actions";
import PostUserCard from "../components/postUserCard";
import Notification from "../components/notification";

const PostUserPage = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')

    const dispatch = useDispatch()
    const {newUserDetails, boolean} = useSelector(state => state.postUserReducer)

    const bindNewUser = async () => {
        if (name === '' && username === '' && email === '' && website === '') return
        else {
            const obj = {
                name : name,
                username: username,
                email: email,
                website: website
            }
            dispatch(createUserAction(obj))
            setName('')
            setUsername('')
            setEmail('')
            setWebsite('')
        }
    }

    return (
        <div className="postWrapper">
            {boolean && <Notification />}
            <div className="postInputs">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                <input value={website} onChange={(e) => setWebsite(e.target.value)} type="text" placeholder="Website" />
            </div>
            <div className="postControls">
                <button onClick={bindNewUser}>CREATE NEW USER</button>
            </div>
            <div className="postUser">
                {
                    newUserDetails
                    ? newUserDetails.map((newUser, i) => <PostUserCard key={i} newUser={newUser} />)
                    : ''
                }
            </div>
        </div>
    )
};

export default PostUserPage;
