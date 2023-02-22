// Trang About

import footer from "@/components/footer";
import header from "@/components/header";
import { useEffect, useState } from "@/lib";
import about from "../page/About";
const projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);
    return `
   ${header()}
   ${about({projects})}
   ${footer()}
    `;
};
export default projects;