import { deleteContact, getContacts } from "../api/projectscontact";
import { useEffect, useState } from "../lib";
import axios from "axios";
import header from "@/components/header";
const contact = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                setProjects(await getContacts());
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return `
      <div class="section contact" id="contact">
      <div id="map" class="map"></div>
${projects.map((project, index) => {
            return `    
      <div class="container">
          <div class="row">
          <div class="col-lg-4"></div>
              <div class="col-lg-4">
                  <div class="contact-info-card">
                      <h4 class="contact-title">${project.name}</h4>
                      <div class="row mb-2">
                          <div class="col-1 pt-1 mr-1">
                              <i class="ti-mobile icon-md"></i>
                          </div>
                          <div class="col-10 ">
                            <h6 class="d-inline">Phone : <br>
                            <span class="text-muted">${project.hotline}</span></h6>
                          </div>
                      </div>
                      <div class="row mb-2">
                          <div class="col-1 pt-1 mr-1">
                              <i class="ti-map-alt icon-md"></i>
                          </div>
                          <div class="col-10">
                              <h6 class="d-inline">Address :<br>
                               <span class="text-muted">${project.address}</span></h6>
                          </div>
                      </div>
                      <div class="row mb-2">
                          <div class="col-1 pt-1 mr-1">
                              <i class="ti-envelope icon-md"></i>
                          </div>
                          <div class="col-10">
                              <h6 class="d-inline">Gmail :<br>
                              <span class="text-muted">${project.gmail}</span>
                              </h6>
                          </div>
                      </div>
                      <ul class="social-icons pt-4">
                          <li class="social-item"><a class="social-link text-dark" href="https://www.facebook.com/tranhaiduong2003/"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                          <li class="social-item"><a class="social-link text-dark" href="https://mail.google.com/mail/u/0/#inbox"><i class="ti-google" aria-hidden="true"></i></a></li>
                          <li class="social-item"><a class="social-link text-dark" href="https://github.com/duongthph21290"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                          <li class="social-item"><a class="social-link text-dark" href="https://vercel.com/dashboard"><i class="ti-github" aria-hidden="true"></i></a></li>
                      </ul> 
                  </div>
              </div>
              <div class="col-lg-4"></div>
              
          </div>
  
      </div>
  </div>
      `;
        }
        ).join("")
    }
`;
}

export default contact;