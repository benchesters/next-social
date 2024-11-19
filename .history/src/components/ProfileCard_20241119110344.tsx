import Image from "next/image"

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
    <div className="h-20 relative">
        <Image src="https://images.pexels.com/photos/20108002/pexels-photo-20108002/free-photo-of-the-beauty-of-hijab.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="rounded-md object-cover"/>
        <Image src="https://images.pexels.com/photos/28999324/pexels-photo-28999324/free-photo-of-vintage-red-tram-on-cobbled-prague-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={48} height={48} className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 z-10"/>
        
    </div>
    </div>
  )
}

export default ProfileCard