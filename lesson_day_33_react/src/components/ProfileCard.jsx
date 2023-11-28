const ProfileCard = ({imgUrl, name, profession, about, skills, email}) => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden mx-2 my-4 p-6 text-center">
                <img src={imgUrl} alt={name} className="w-32 h-40 mx-auto rounded-full" />
                <h1 className="text-lg">{name}</h1>
                <p>{profession}</p>
                <div className="mt-4">
                    <p><strong>about me</strong>{about}</p>
                    <p><strong>skills</strong>{skills}</p>
                    <p><strong>contact</strong>{email}</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard;