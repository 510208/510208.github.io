import {
  Info,
  UsersRound,
  FolderGit,
  ToolCase,
  Newspaper,
  Gauge,
} from "lucide-react";

const menuItems = [
  {
    label: "ABOUT",
    labelZh: "關於站長",
    to: "/about",
    icon: <Info size={18} />,
  },
  {
    label: "FRIENDS",
    labelZh: "我的朋友",
    to: "/friends",
    icon: <UsersRound size={18} />,
  },
  {
    label: "PROJECTS",
    labelZh: "我的專案",
    to: "/projects",
    icon: <FolderGit size={18} />,
  },
  {
    label: "EQUIPMENTS",
    labelZh: "我的裝備",
    to: "/equipments",
    icon: <ToolCase size={18} />,
  },
  {
    label: "DASHBOARD",
    labelZh: "資訊儀表",
    to: "/dashboard",
    icon: <Gauge size={18} />,
  },
  {
    label: "BLOG",
    labelZh: "部落格文章",
    to: "/blog-posts",
    icon: <Newspaper size={18} />,
  },
];

export default menuItems;
