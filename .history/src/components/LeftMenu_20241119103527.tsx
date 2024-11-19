import ProfileCard from "./ProfileCard"

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">LEFT NENU BEN
      {type === "home" && <ProfileCard/>}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm"></div>
    </div>
  )
}

export default LeftMenu