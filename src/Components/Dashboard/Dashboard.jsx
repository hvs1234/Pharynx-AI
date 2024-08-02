import Sidebar from "../Sidebar/Sidebar";
import DashPart from "../DashPart/DashPart";
import TopNav from "../../TopNav/TopNav";

const Home = () => {
  // Reload

  // const handleOnClick = (path) => (e) => {
  //   e.preventDefault();
  //   window.location.pathname = path;
  // };

  return (
    <section className="flex">
      <Sidebar />
      <div className="text-xl text-gray-900 font-semibold w-[100%] flex flex-col">
        <TopNav />
        <DashPart />
      </div>
    </section>
  );
};

export default Home;
