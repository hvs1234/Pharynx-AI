import { MdOutlineMenuBook } from "react-icons/md";

const LiveChatData = [
  {
    id: 1,
    icon:<MdOutlineMenuBook size={20}/>,
    link: '/livechat',
    class:"flex justify-center items-center gap-[1rem] font-normal max-2xl:flex-col",
    text: "Add user attributes manually",
  },
  {
    id: 2,
    icon:<MdOutlineMenuBook size={20}/>,
    link: '/livechat',
    class:"flex justify-center items-center gap-[1rem] font-normal max-2xl:flex-col",
    text: "Add/Remove Tag & update attribute",
  },
  {
    id: 3,
    icon:<MdOutlineMenuBook size={20}/>,
    link: '/livechat',
    class:"flex justify-center items-center gap-[1rem] font-normal max-2xl:flex-col",
    text: "Send & Generate media link",
  },
  {
    id: 4,
    icon:``,
    link: '/livechat',
    class:"flex justify-center items-center gap-[1rem] font-normal max-2xl:flex-col max-2xl:order-2",
    text: "",
  },
  {
    id: 5,
    icon:<MdOutlineMenuBook size={20}/>,
    link: '/livechat',
    class:"flex justify-center items-center gap-[1rem] font-normal max-2xl:flex-col max-2xl:order-1",
    text: "Create Live chat without chatbot",
  },
];

export default LiveChatData;
