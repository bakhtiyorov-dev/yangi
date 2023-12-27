import Link from "next/link";
import { BiErrorAlt } from "react-icons/bi";

const Cancel = () => {
  return (
    <>
      <div className="h-[90vh] flex flex-col justify-center items-center">
        <BiErrorAlt className="w-20 h-20 text-red-500" />
        <h1 className="text-2xl md:text-5xl mt-4">Canceled Subscription</h1>
        <Link href={"/"}>
          <button className="mt-4 bg-[#E10856] py-4 px-5 rounded">
            Choose Plan
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cancel;
