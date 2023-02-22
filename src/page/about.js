import { deleteProject, getProjects } from "../api/project";
import { useEffect, useState } from "../lib";
import axios from "axios";
import header from "@/components/header";
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
              <div class="col-lg-1 about-card"></div> 
              ${projects.map((project, index) => {
        return `               
              <div class="col-lg-3 about-card">
                      <h3 class="font-weight-light">${project.name}</h3>
                      <span class="line mb-5"></span>
                      <h5 class="mb-3">${project.desc}</h5>
                      <h5 class="mb-3">${project.desc1}</h5>
                      <h5 class="mb-3"><img src ="${project.images}" style ="width:90%"></h5>
                      <p class="mt-20">${project.email}</p>
                      <p class="mt-20">${project.sdt}</p>
                      <p class="mt-20">${project.author}</p>
                      <p class="mt-20"><a href = "${project.link}">${project.link}</a></p>
              </div>
                 `;
    })}



       <div class="col-lg-1 about-card"></div> 
              </div>
              </div>
      
      `;
}

export default about;