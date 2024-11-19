import ProfileCard from "./ProfileCard"

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">LEFT NENU BEN
      {type === "home" && <ProfileCard/>}
      <div className=""></div>
    </div>
  )
}

export default LeftMenu