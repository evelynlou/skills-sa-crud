import NameUser from "./Modules/nameUser.js";
import ProfilePicture from "./Modules/userPicture.js"
import UserStatus from "./Modules/userStatus.js";
import Address from "./Modules/Buttons/iconEditAddress.js";
import IconeEdit from "./Modules/Buttons/iconToEditScreen.js";

export default function EditProfile() {
    return (
        <div>
            <ProfilePicture />
            <NameUser />
            <UserStatus />
            <Address />
            <IconeEdit />
        </div>
    )
}