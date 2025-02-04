import { FaDiscord, FaCompass } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { ServerIcon } from "./icons";
import { TbDownload } from "react-icons/tb";

const Navbar: React.FC = () => {
  return (
    <nav className="flex h-full w-[72px] flex-shrink-0 select-none flex-col items-center space-y-2 bg-d-dark-black py-3">
      <ServerIcon
        to="/channels/@me"
        main
        icon={<FaDiscord />}
        tooltip="Direct Messages"
      />
      <div className="h-[1.5px] w-[40%] bg-gray-700" />
      <ServerIcon
        to="/channels/123"
        size="text-sm"
        tooltip="Some Server"
        text="6308"
      />
      <ServerIcon
        to="/"
        hover="hover:bg-green-500"
        textColor="text-green-500"
        tooltip="Add a Server"
        icon={<AiOutlinePlus />}
      />
      <ServerIcon
        to="/"
        hover="hover:bg-green-500"
        textColor="text-green-500"
        tooltip="Explore Public Servers"
        icon={<FaCompass />}
      />
      <div className="h-[1.5px] w-[40%] bg-gray-700" />
      <ServerIcon
        to="/"
        hover="hover:bg-green-500"
        textColor="text-green-500"
        size="text-[24px]"
        classNames="pb-1"
        tooltip="Download Apps"
        icon={<TbDownload />}
      />
    </nav>
  );
};

export default Navbar;
