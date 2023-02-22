// Trang Contact

import footer from "@/components/footer";
import header from "@/components/header";
import { useEffect, useState } from "@/lib";
import contact from "../page/Contact";
const projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);
    return `
   ${header()}
   ${contact({projects})}
   ${footer()}
    `;
};
export default projects;