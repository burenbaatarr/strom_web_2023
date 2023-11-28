import { useState } from "react"
import { profiles } from "../data/data2";
import Card from "./Card";

export const Body = () => {
    const [profileState, setProfileState] = useState(profiles)
    const props = profileState.map((profile) => {
      return (
        <Card 
        imgUrl={profile.imgUrl}
        title={profile.title}
        likes={profile.likes}
        />
      )
    }) 
    return (
        <div>
          {props}
        </div>
    )
}
export default Body;