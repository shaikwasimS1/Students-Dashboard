import { FiSearch, FiUpload, FiEye, FiEdit } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";
import axios from "axios";
import { useContext, useEffect, useState, } from "react";
import StudentsContex from "../../StudentsContex";
import "./Students.css"
import logo from '../../assets/navlogo.svg';

const Students = () => {
  const { posts, setPosts } = useContext(StudentsContex);
  const [newpost, setNewPost] = useState({ name: "", class: "", section: "" });

  const [isUpdating, setIsUpdating] = useState(false)
  const [currentPostID, setCurrentPostId] = useState(null)

  // Fetch 
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log("Something went wrong", err));
  }, []);





  const handleSubmite = (e) => {
    e.preventDefault();
    if (isUpdating) {
      editPutPost()
    } else {

      addPost()
    }


  };

  const addPost = () => {

    if (!newpost.name || !newpost.class || !newpost.section) {
      alert("Please fill all fields");
      return;
    }

    // POST 
    axios.post("http://localhost:3000/posts", newpost)
      .then((res) => {

        setPosts([...posts, res.data]);


        setNewPost({ name: "", class: "", section: "" })
        console.log("Student added!", res.data)
      })
      .catch((err) => console.log("Something went wrong", err))
  }



  // PUT-Edit

  const handleEditClick = (post) => {
    setNewPost({ name: post.name, class: post.class, section: post.section })
    setIsUpdating(true)
    setCurrentPostId(post.id)
  }


  const editPutPost = () => {
    axios.put(`http://localhost:3000/posts/${currentPostID}`, newpost)
      .then((res) => {
        setPosts(posts.map((post) => post.id === currentPostID ? res.data : post))
        setNewPost({ name: "", class: "", section: "" })
        setIsUpdating(false)
        setCurrentPostId(null)
      }).catch((err) => console.log("Something went wrong", err))
  }


  return (
    <>

      <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">


          <div className="flex flex-col lg:flex-row gap-1 lg:items-center lg:justify-between">

            {/* Search */}
            <div className="flex items-center border border-gray-300 rounded-md px-2 py-1 w-full lg:w-80 bg-gray-50">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Add Student by name"
                className="bg-transparent outline-none text-sm w-full"
                value={newpost.name}
                onChange={(e) => setNewPost({ ...newpost, name: e.target.value })}
              />
            </div>


            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <select
                className="border border-gray-300 shadow-md rounded-md px-1 py-1 text-sm cursor-pointer bg-gray-50"
                value={newpost.class}
                onChange={(e) => setNewPost({ ...newpost, class: e.target.value })}
              >
                <option value="">Select Class</option>
                <option>Class 10</option>
                <option>Class 9</option>
                <option>Class 8</option>
                <option>Class 7</option>
                <option>Class 6</option>
                <option>Class 5</option>
                <option>Class 4</option>
                <option>Class 3</option>
                <option>Class 2</option>
                <option>Class 1</option>
              </select>

              <select
                className="border border-gray-300 shadow-md rounded-md px-1 py-1 text-sm cursor-pointer bg-gray-50"
                value={newpost.section}
                onChange={(e) => setNewPost({ ...newpost, section: e.target.value })}
              >
                <option value="">Select Section</option>
                <option>Nile</option>
                <option>Ganga</option>
                <option>Yamuna</option>
              </select>
            </div>

            {/* BTN */}
            <div className="flex flex-wrap gap-3 btn1">
              <button className="flex items-center gap-2 border px-1 py-1 rounded-md text-sm hover:bg-gray-100 cursor-pointer">
                <FiUpload /> Import CSV
              </button>
              <button

                onClick={handleSubmite}
                className="bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 px-1 py-1 cursor-pointer"
              >
                {isUpdating ? "Update" : "Add Student"}
              </button>
            </div>
          </div>



          <div className="overflow-x-auto mt-4">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4">Student's Name</th>
                  <th className="p-4">Admission No</th>
                  <th className="p-4">Class & Section</th>
                  <th className="p-4">Parent Name</th>
                  <th className="p-4">Contact Number</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
               
                {posts.map((post) => (
                  <tr className="border-t" key={post.id}>
                     <div className="flex items-center">
                      <img src={logo} alt="Profile" className="w-[22px] h-[25px]"/>
                      <td className="p-4">
                      {post.name}
                      </td>
                     </div>
                    
                    <td className="p-4">ADM-001-2024</td>
                    <td className="p-4">{post.class} - {post.section}</td>
                    <td className="p-4">Arjun Sharma</td>
                    <td className="p-4">+91 9123456780</td>
                    <td className="p-4">
                      <button className="bg-[#32c392fc] w-9 rounded-md py-1 px-3">
                        <TiTickOutline className="border border-white rounded-full" />
                      </button>
                    </td>
                    <td className="p-4 flex gap-2">
                      <button className="shadow-md p-2 rounded hover:bg-gray-100 cursor-pointer">
                        <FiEye size={14} />
                      </button>
                      <button className="shadow-md p-2 rounded hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleEditClick(post)}
                      >
                        <FiEdit size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>

  );
};

export default Students;




















