const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="">
      {type === "home" && <ProfileCard />
    </div>
  )
}

export default LeftMenu