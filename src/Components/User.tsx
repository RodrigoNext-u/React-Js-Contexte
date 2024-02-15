import { UserContext } from "../UserContext";
import { useContext } from "react";

const user = () =>{
    const { user, login } = useContext(UserContext)

    if(!user) {
        return ( <button onClick= {login}>login</button>
        )
    }

    return (<div>
        {user?.name}
    </div>)
}

export default user;