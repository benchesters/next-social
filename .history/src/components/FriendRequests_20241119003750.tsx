import Link from "next/link"

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
       {/* TOP    */}
       <div className="">
            <span className="text-gray-500">Friend Requests</span>
            <Link href="" alt="">See all</Link>
       </div>
       {/* BOTTOM    */}
        <div className=""></div>
    </div>
  )
}

export default FriendRequests