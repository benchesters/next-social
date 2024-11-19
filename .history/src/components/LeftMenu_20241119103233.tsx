import ProfileCard from "./ProfileCard"

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="">LEFT NENU BEN
      {type === "home" && <ProfileCard/>}
    </div>
  )
}

export default LeftMenu