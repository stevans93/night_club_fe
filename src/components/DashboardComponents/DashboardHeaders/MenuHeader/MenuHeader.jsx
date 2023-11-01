import { AiOutlinePlus } from "react-icons/ai";

const MenuHeader = (props) => {
  return (
    <>
      <div className="flex rounded-lg items-center h-16 justify-between px-5 bg-white shadow-lg">
        <div className="flex items-center gap-3">
          <span>Meni</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={props.onClick}
            className="flex items-center px-5 py-3 rounded-lg bg-primary h-8 text-white gap-2"
          >
            <AiOutlinePlus size="1.3rem" />
            Dodaj Stavku
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuHeader;
