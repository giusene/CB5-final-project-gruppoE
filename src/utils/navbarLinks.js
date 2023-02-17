import { RiHome5Line, RiContactsLine } from "react-icons/ri";
import { BiWallet, BiCarousel } from "react-icons/bi";
import { CgArrowsExchangeAlt } from "react-icons/cg";

export const navbarLinks = [
  {
    id: 1,
    label: "Home",
    route: "/",
    icon: <RiHome5Line />,
  },
  {
    id: 2,
    label: "Wallet",
    route: "/wallet",
    icon: <BiWallet />,
  },
  {
    id: 3,
    label: "Trade",
    route: "/trade",
    icon: <CgArrowsExchangeAlt />,
  },
  {
    id: 4,
    label: "NFT",
    route: "/nft",
    icon: <BiCarousel />,
  },
  {
    id: 5,
    label: "Contacts",
    route: "/contacts",
    icon: <RiContactsLine />,
  },
];
