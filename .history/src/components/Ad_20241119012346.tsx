const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
    {/* TOP */}
    <div className="flex items-center justify-between text-gray-500 font-medium">
      <span>Sponsored Ads</span>
    </div>
    {/* BOTTOM */}
    <div className=""></div>
  </div>;
};

export default Ad;