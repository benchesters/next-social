import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
    {/* TOP */}
    <div className="flex items-center justify-between text-gray-500 font-medium">
      <span>Sponsoredf Ads</span>
      <Image src="/more.png" alt="" width={16} height={16}/>
    </div>
    {/* BOTTOM */}
    <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4" }`}>
    
      <div className="relative">
      <Image src="https://images.pexels.com/photos/27490976/pexels-photo-27490976/free-photo-of-a-bride-and-groom-kiss-under-a-spotlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
      alt="" 
      fill className="rounded-lj object-cover"/>

         
      </div>
      </div>
  </div>;
};

export default Ad;