import { useState } from "react";
import { RiHome5Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom"
import { SlCalender } from "react-icons/sl";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { TbCurlyLoop } from "react-icons/tb";
import { IoMdBook } from "react-icons/io";




const Dashboard = () => {

  const [userClick, setUserClick] = useState(false)
  const [attendance, setAttendance] = useState(false)
  const [academic, setAcademics] = useState(false)
  const [announcements, setAnnouncements] = useState(false)
  const [roles, setRoles] = useState(false)




  return (
    <>


      <div className=" mt-5 pl-5 border-r border-gray-300 min-h-[100%] ">

        <div className="flex items-center gap-2 mb-2">
          <RiHome5Line className="text-[18px]" />
          <h4 className="font-medium">Dashboard</h4>
        </div>

        {/* User Dashboard */}
        <div className="mb-2">
          <div className="flex items-center gap-2 ">
            <GoPeople className="text-[18px]" />
            <button className="flex items-center justify-between w-full px-4 py-2 cursor-pointer"
              onClick={() => setUserClick(!userClick)}>
              <span className="font-medium">Users</span>

              <IoIosArrowForward className={`transition-transform ${userClick ? "rotate-90" : ""}`} />
            </button>
          </div>
          {userClick && (
            <div>
              <ul className="ml-2">
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer">
                  <Link to="/students" className="block w-full text-sm" >
                    Students
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer">
                  <Link to="/teachers" className="block w-full text-sm">
                    Teachers
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer" >
                  <Link to="/staff" className="block w-full text-sm">
                    Staff
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer">
                  <Link to="/coorinators" className="block w-full text-sm">
                    Coorinators
                  </Link>
                </li>

              </ul>
            </div>

          )}

        </div>

        {/* Attendance-DashBoard */}

        <div className="mb-2">
          <div className="flex items-center gap-2 ">
            <SlCalender className="text-[18px]" />
            <button className="flex items-center justify-between w-full px-4 py-2 cursor-pointer"
              onClick={() => setAttendance(!attendance)}>
              <span className="font-medium">Attendance</span>

              < IoIosArrowForward className={`transition-transform ${attendance ? "rotate-90" : ""}`} />
            </button>
          </div>
          {attendance && (
            <div>
              <ul className="ml-2">
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer">
                  <Link to="#" className="block w-full text-sm" >
                    Student Attendance
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer">
                  <Link to="#" className="block w-full text-sm">
                    Teacher Attendance
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer" >
                  <Link to="#" className="block w-full text-sm">
                    Attendance Report
                  </Link>
                </li>
              </ul>
            </div>

          )}

        </div>

             {/* Academics */}
        <div className="mb-2">
          <div className="flex items-center gap-2 ">
            <HiOutlineAcademicCap  className="text-[18px]" />
            <button className="flex items-center justify-between w-full px-4 py-2 cursor-pointer"
              onClick={() => setAcademics(!academic)}>
              <span className="font-medium">Academics</span>
              <IoIosArrowForward className={`transition-transform ${academic ? "rotate-90" : ""}`} />
            </button>
          </div>
          {academic && (
            <div>
              <ul className="ml-2">
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer">
                  <Link to="#" className="block w-full text-sm" >
                    Subjects
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer">
                  <Link to="#" className="block w-full text-sm">
                    Courses
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer" >
                  <Link to="#" className="block w-full text-sm">
                    Departments
                  </Link>
                </li>
              </ul>
            </div>

          )}



        </div>
         


{/* setAnnouncements */}
        <div className="mb-2">
          <div className="flex items-center gap-2 ">
            <TbCurlyLoop  className="text-[18px]" />
            <button className="flex items-center justify-between w-full px-4 py-2 cursor-pointer"
              onClick={() => setAnnouncements(!announcements)}>
              <span className="font-medium">Announcements</span>
              <IoIosArrowForward className={`transition-transform ${announcements ? "rotate-90" : ""}`} />
            </button>
          </div>
          {announcements && (
            <div>
              <ul className="ml-2">
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer">
                  <Link to="#" className="block w-full text-sm" >
                    Events & Activities
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer">
                  <Link to="#" className="block w-full text-sm">
                    Exam/Results Notifications
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer" >
                  <Link to="#" className="block w-full text-sm">
                    Fee/Payment Alerts
                  </Link>
                </li>
              </ul>
            </div>

          )}


        </div>
        <div className="mb-2">
          <div className="flex items-center gap-2 ">
            <IoMdBook   className="text-[18px]" />
            <button className="flex items-center justify-between w-full px-4 py-2 cursor-pointer"
              onClick={() => setRoles(!roles)}>
              <span className="font-medium">Roles & Permissions</span>
              <IoIosArrowForward className={`transition-transform ${roles ? "rotate-90" : ""}`} />
            </button>
          </div>
          {roles && (
            <div>
              <ul className="ml-2">
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer">
                  <Link to="#" className="block w-full text-sm" >
                    Admin
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer">
                  <Link to="#" className="block w-full text-sm">
                    Moderator
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full px-4 py-1  rounded hover:bg-gray-300 cursor-pointer" >
                  <Link to="#" className="block w-full text-sm">
                    Editor
                  </Link>
                </li>
              </ul>
            </div>

          )}



        </div>




      </div>

    </>
  )
}

export default Dashboard


//<FaUser /> <FaChevronDown  />