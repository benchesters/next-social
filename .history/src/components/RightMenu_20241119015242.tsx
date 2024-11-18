import Ad from "./Ad";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";

const RightMenu = ({ userId }: { userID?: string }) => {
  return <div className="flex flex-col gap-6">
    <FriendRequests />
    <Birthdays />
    <Ad size="md" />

  </div>;
};

export default RightMenu;  