import ProfileAbout from "./profileAbout"
import ProfileDetails from "./profileDetails"

const MyProfile = () => {
    return (
        <div className="flex flex-col gap-6">
            <ProfileDetails />
            <ProfileAbout />
        </div>
    )
}

export default MyProfile