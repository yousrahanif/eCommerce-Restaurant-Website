import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const UserHome = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="w-full ml-4">
            <h2 className="text-3xl ">Hi, <span className="uppercase">{user.displayName}</span> </h2>
        </div>
    );
};

export default UserHome;