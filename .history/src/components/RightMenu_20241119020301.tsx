import Ad from "./Ad";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCart from "./UserMediaCart";

const RightMenu = ({ userId }: { userID?: string }) => {
  return (
  <div className="flex flex-col gap-6">
    {userId ? (
      <>
      <UserInfoCard userId={userID}/>
      <UserMediaCart/>
      </>
     ) : null}    
    <FriendRequests />
    <Birthdays />
    <Ad size="md" />
  </div>
  );
};

export default RightMenu;  