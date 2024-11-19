import Link from "next/link"
import ProfileCard from "./ProfileCard"
import Image from "next/image"

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">LEFT NENU BEN
      {type === "home" && <ProfileCard/>}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <Image src="/posts.png" alt="" width={20} height={20}/>
        <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
      </div>
    </div>
  )
}

export default LeftMenu