// Trang about
import { useEffect, useState } from "@/lib";
import about from "./About";
const homepage1 = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);
    return `
    ${about({projects})}
    `;
};
export default homepage1;