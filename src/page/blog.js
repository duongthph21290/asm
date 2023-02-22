import { deleteBlog, getBlogs } from "../api/projectsblog";
import { useEffect, useState } from "../lib";
import axios from "axios";
import header from "@/components/header";
const blog = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                setProjects(await getBlogs());
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);



    return `
      <section class="section" id="blog">
      <h2 class="mb-5" style="margin-left: 120px;">Latest <span class="text-danger">News</span></h2>
 ${projects.map((project, index) => {
        return `   
    <div class="container">
         
          <div class="row">
              <div class="blog-card">
                  <div class="img-holder">
                    <img src ="${project.images}">
                  </div>
                  <div class="content-holder">
                  <h3 class="font-weight-light">${project.name}</h3>
                  <p class="mt-20">${project.author}</p>
                  <form action="">
                  <div class="form-group">
                      <input  class="form-control" type="text" placeholder="..." required>
                  </div>
                  <div class="form-group ">
                      <button type="submit" class="form-control btn btn-primary" >Bình luận</button>
                  </div>
              </form>
              </div>
          </div>
      </div>
  </section>
      `;
 }
 ).join("")
        }
        `;
}
  
  export default blog;