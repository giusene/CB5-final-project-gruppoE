import { FiHome } from "react-icons/fi";
import { BsWallet2 } from "react-icons/bs";
import { AiOutlineStock, AiOutlineUser } from "react-icons/ai";

export const navbarLinks = [
  {
    id: 1,
    label: "Home",
    route: "/",
    icon: <FiHome />,
  },
  {
    id: 2,
    label: "Wallet",
    route: "/wallet",
    icon: <BsWallet2 />,
  },
  {
    id: 3,
    label: "Trade",
    route: "/trade",
    icon: <AiOutlineStock />,
  },
  {
    id: 4,
    label: "NFT",
    route: "/nft",
    icon: <FiHome />,
  },
  {
    id: 5,
    label: "Contacts",
    route: "/contacts",
    icon: <AiOutlineUser />,
  },
];
