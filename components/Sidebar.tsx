import { useAddress, ConnectWallet } from "@thirdweb-dev/react";
import sha256 from "crypto-js/sha256";
import Identicon from "identicon.js";
import { useEffect, useState } from "react";

interface ISidebarItemProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: ISidebarItemProps) => {
  const address = useAddress();
  const [profileImg, setProfileImg] = useState<string | null>(null);

  useEffect(() => {
    if (address) {
      const data = new Identicon(sha256(address).toString(), 420).toString();
      setProfileImg(`data:image/png;base64,${data}`);
    }
  }, [address]);

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 z-10 w-64 h-full bg-gray-900">
        <div className="p-4 flex flex-col justify-center items-center text-center">
          <img
            src={profileImg || "https://via.placeholder.com/300"}
            className="w-48 h-48 rounded-full object-cover"
            alt="Profile"
          />
        </div>
        <div className="px-10">
          <ConnectWallet />
        </div>
      </div>
      <div className="relative z-0 flex-1 overflow-y-scroll">
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
