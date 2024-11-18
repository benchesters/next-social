import { Hedvig_Letters_Sans } from "next/font/google";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link"

const UserInfoCard = ({ userId }: { userID: string }) => {
  return (
<div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
       {/* TOP */}
       <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">User Information</span>
            <Link href="/" className="text-blue-500 text-xs">
            See all
            </Link>
       </div>
       {/* BOTTOM */}
       <div className="flex flex-col gap-4 text-gray-500"></div>
       <div className="flex items-center gap-2">
        <span className="text-xl text-black">Lloyd Fleming</span>
        <span className="text-sm">@lloydfleming</span>       
       </div> 
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam tortor, 
       vehicula placerat eros ut, vulputate varius augue. Morbi pretium urna.
       </p>
       <div className="flex items-center">
        <Image src="/map.png" alt="" width={16} height={16} />
        <span>Living in <b>Denver</b></span>
       </div>
       </div>
  );
}:

export default UserInfoCard