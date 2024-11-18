import Image from "next/image"
import Link from "next/link"

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
       {/* TOP */}
       <div className="">
            <span className="text-gray-500">Friend Requests</span>
            <Link href="/" className="text-blue-500 text-xs">See all</Link>
       </div>
       {/* USER */}
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/28847012/pexels-photo-28847012/free-photo-of-stunning-view-of-brussels-town-hall-in-belgium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className="cursoor-pointer"/>
                <span>Wayne Burton</span>
            </div>
            <div className=""> 
            <Image src="/accept.png" alt="" width={20} height={20} className="cursoor-pointer"/>
            <Image src="/reject.png" alt="" width={20} height={20} className="cursoor-pointer"/>
            </div>

        </div>
    </div>
  )
}

export default FriendRequests