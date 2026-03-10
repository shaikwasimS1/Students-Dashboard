import { GoHome } from "react-icons/go";
import { RiGraduationCapLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoStatsChartOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import StudentsContex from "../../StudentsContex";
import { useContext } from "react";

const Home = () => {

  const { posts } = useContext(StudentsContex)
 console.log(useContext(StudentsContex))
 
  
  const location = useLocation()

  return (
    <>
      <div className="border-b border-gray-300 pt-7 ps-7 pb-4">
        <div className="flex items-center pt-3 gap-2">
          <GoHome className="text-[20px]" />
          <p className="text-[#959faa]">Home </p> <span> {location.pathname} </span>
        </div>
      </div>

      <div className="p-6 bg-gray-100 ">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            <div className="bg-gray-100 p-3 rounded-lg">
              <RiGraduationCapLine className="text-xl text-gray-600" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{posts.length}</h2>
              <p className="text-gray-500 text-sm">Students</p>
              <p className="text-green-500 text-xs mt-1">+32 this week</p>
            </div>
          </div>


          <div className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            <div className="bg-gray-100 p-3 rounded-lg">
              <GoPeople className="text-xl text-gray-600" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">180</h2>
              <p className="text-gray-500 text-sm">New Admissions</p>
              <p className="text-green-500 text-xs mt-1">This Academic Year</p>
            </div>
          </div>


          <div className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            <div className="bg-gray-100 p-3 rounded-lg">
              <IoStatsChartOutline className="text-xl text-gray-600" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">96.2%</h2>
              <p className="text-gray-500 text-sm">Attendance Today</p>
              <p className="text-green-500 text-xs mt-1">
                Avg across all the classes
              </p>
            </div>
          </div>

        </div>
      </div>




    </>
  );
};

export default Home;