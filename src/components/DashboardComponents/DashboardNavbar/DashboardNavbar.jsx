import { GiHamburgerMenu } from "react-icons/gi";
import { BsEye } from "react-icons/bs";
import { BiSolidBellRing } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function DashboardNavbar({ handleOpen }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  }

  return (
    <nav className={`flex justify-between h-[10vh] items-center relative right-0 px-4 shadow-lg`}>
      <div className="flex gap-5 items-center h-[5vh]">
          <GiHamburgerMenu className="text-2xl text-black cursor-pointer" onClick={handleOpen} />
        <span className="w-px h-4/5 bg-gray-500 opacity-20"></span>
        <button className="flex h-8 items-center px-5 bg-primary text-white rounded-lg gap-2" onClick={handleBack}>
          <BsEye size="1.1rem" /> View page
        </button>
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex rounded-circle items-center justify-center h-8 w-8 bg-primary">
          <BiSolidBellRing className="text-white" size="1.1rem" />
        </div>
        <div className="flex items-center gap-2">
          <span>English</span>
          <IoIosArrowDown className="text-primary" />
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;