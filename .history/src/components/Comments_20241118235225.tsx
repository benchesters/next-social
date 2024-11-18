import Image from "next/image"

const Comments = () => {
  return (
    <div className=" ">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/27269560/pexels-photo-27269560/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"  alt="" width={32}  height={32} className="w-8 h-8 rounded-full"/>
         
         <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1" />
          <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer"/>
      
      </div>
      </div>
      {/* COMMENTS */}
      <div className=""></div>
    </div>
  )
}

export default Comments