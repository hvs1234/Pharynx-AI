import { MdMessage } from "react-icons/md";

const Message = () => {
  return (
    <>
      <div className="container">
        <div className="cursor-pointer flex items-center w-[auto] px-[1rem] py-[1rem] justify-center bg-[#0c4f13] fixed z-1001 bottom-[10rem] rounded-xl right-[2rem]">
          <a href="https://messages.google.com/" target="_blank">
            <MdMessage size={30} className="text-[white]" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Message;
