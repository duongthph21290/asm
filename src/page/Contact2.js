// Trang Contact

import { useEffect, useState } from "@/lib";
import contact from "../page/Contact";
const contact2 = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);
    return `
    ${contact({projects})}
    `;
};
export default contact2;