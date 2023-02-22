// Trang Blog

import { useEffect, useState } from "@/lib";
import blog from "../page/Blog";
const blog2 = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);
    return `
    ${blog({projects})}
    `;
};
export default blog2;