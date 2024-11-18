const Birthdays = () => {
  return (
    <div className=''>
        
               {/* TOP */}
       <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Friend Requests</span>
       </div>
       {/* USER */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/28847012/pexels-photo-28847012/free-photo-of-stunning-view-of-brussels-town-hall-in-belgium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span>Wayne Burton</span>
            </div>
            <div className="flex gap-3 justify-end"> 
            <Image src="/accept.png" alt="" width={20} height={20} className="cursoor-pointer"/>
            <Image src="/reject.png" alt="" width={20} height={20} className="cursoor-pointer"/>
            </div>

        </div>
    </div>
  )
}

export default Birthdays