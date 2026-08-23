
import { useNavigate } from "react-router-dom";

function PicsItemsMol({ url, pos, title, icon }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick}>
      <div className="flex flex-col justify-center items-center">
        <img src={icon} alt="" className="size-90 rounded-b-2xl" />
        <span className="flex flex-col justify-center gap-1 items-center h-[15vh]">
          <h3 className="text-md font-semibold w-62">{title}</h3>
          <button className="border p-1 w-48 h-8 rounded-sm text-sm hover:bg-amber-600 font-semibold">
            {pos}
          </button>
        </span>
      </div>
    </div>
  );
}

export default PicsItemsMol;
