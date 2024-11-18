import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
    {/* TOP */}
    <div className="flex items-center justify-between text-gray-500 font-medium">
      <span>Sponsored Ads</span>
      <Image src="/more.png" alt="" width={16} height={16}/>
    </div>
    {/* BOTTOM */}
    <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4" }`}>
    
      <div className={`relative w-full ${ size === "md" ? "h-36" : "h-48" }`}>
      <Image src="https://images.pexels.com/photos/27490976/pexels-photo-27490976/free-photo-of-a-bride-and-groom-kiss-under-a-spotlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
      alt="" 
      fill className="rounded-lj object-cover"/>

         
       </div>
       <div className="flex-box items-center gap-4">
       <Image src="https://images.pexels.com/photos/27490976/pexels-photo-27490976/free-photo-of-a-bride-and-groom-kiss-under-a-spotlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
      alt="" 
      width={24}
      height={24}
      className="rounded-full w-6 h-6 object-cover"
      />
      <span className="text-blue-500 font-medium"></span>
       </div>
      </div>
  </div>;
};

export default Ad;