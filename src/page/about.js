import { deleteProject, getProjects } from "../api/project";
import { useEffect, useState } from "../lib";
import axios from "axios";
const about = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                setProjects(await getProjects());
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);


    return `
      
              <div class="container-fluid">
              <div id="about" class="row about-section">
              ${projects.map((project, index) => {
        return `               
              <div class="col-lg-4 about-card">
                      <h3 class="font-weight-light">${project.name}</h3>
                      <span class="line mb-5"></span>
                      <h5 class="mb-3">${project.desc}</h5>
                      <p class="mt-20">${project.author}</p>
              </div>
                 `;
    })}


                ${projects.map((project, index) => {
        return `           
                      <div class="col-lg-4 about-card"> 
                      <h3 class="font-weight-light">${project.name}</h3>
                      <span class="line mb-5"></span>
                      <h5 class="mb-3">${project.desc}</h5>
                      <p class="mt-20">${project.author}</p>
                      <p class="mt-20">SĐT : ${project.sdt}</p>
                      <p class="mt-20">Email : ${project.email}</p>

                    </div>
                  
                      `;
    })} 

              </div>
              </div>
      
      `;
}

export default about;