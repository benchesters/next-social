import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Image from "next/image"

const ProfilePage = () => {
  return ( 
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile"/>
        </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image src="https://images.pexels.com/photos/14778801/pexels-photo-14778801.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="" 
              fill className="object-cover"
              />
               <Image src="https://images.pexels.com/photos/29454337/pexels-photo-29454337/free-photo-of-stylish-portrait-of-woman-in-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt=""
              width={128} 
              height={128} 
              className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
              />
            
              
            </div>
          </div>
          <Feed/>
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test"/>
        </div>
    </div>
  )
}
 
export default ProfilePage