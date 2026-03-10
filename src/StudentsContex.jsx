import { createContext, useEffect, useState } from "react";
import axios from "axios";

const StudentsContex = createContext()

export const StudentsProvider = ({ children }) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                
                const res = await axios.get("http://localhost:3000/posts")
                setPosts(res.data)

            } catch (err) {
                console.log("Somthing Went Wrong", err);
            }
        }

        fetchStudents()
    }, [])
    return (
        <div>

            <StudentsContex.Provider value={{ posts, setPosts}}>
                {children}
            </StudentsContex.Provider>


        </div>
    )
}

export default StudentsContex
