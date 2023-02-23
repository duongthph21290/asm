import "bootstrap/dist/css/bootstrap.min.css";
const app = document.querySelector("#app");


import { render, router } from "./src/lib";
import HomePage from "./src/page/HomePage";
import Projects from "./src/page/Projects";
import Projects1 from "./src/page/Projects1";
import Projects2 from "./src/page/Projects2";



import AdminProjectsBlog from "@/admin/projectsblog";
import AdminProjectsAddBlog from "@/admin/projectsblog-add";
import AdminProjectEditBlog from "@/admin/projectsblog-edit";


import AdminProjectsPage from "./src/admin/projects";
import AdminProjectsAddPage from "./src/admin/projects-add";
import AdminProjectEditPage from "./src/admin/projects-edit";



import AdminProjectsContact from "./src/admin/projectscontact";
import AdminProjectsAddContact from "./src/admin/projectscontact-add";
import AdminProjectEditContact from "@/admin/projectscontact-edit";



router.on("/",()=> render(HomePage,app));
router.on("/about",()=> render(Projects,app));
router.on("/blog", ()=> render(Projects1,app));
router.on("/contact", ()=> render(Projects2,app))


router.on("/admin/blog",() => render(AdminProjectsBlog,app));
router.on("/admin/projectsaddblog",()=> render(AdminProjectsAddBlog,app));
router.on("/admin/projectseditblog",()=> render(AdminProjectEditBlog,app));
router.on("/admin/projectseditblog/:id/edit", ({ data }) => render(() => AdminProjectEditBlog(data), app));



router.on("/admin/projects",()=> render(AdminProjectsPage,app));
router.on("/admin/projectsadd",()=> render(AdminProjectsAddPage,app));
router.on("/admin/projectsedit" , () => render(AdminProjectEditPage,app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectEditPage(data), app));




router.on("/admin/contact",()=>  render(AdminProjectsContact,app));
router.on("/admin/projectsaddcontact",()=> render(AdminProjectsAddContact,app));
router.on("/admin/projectsedit",()=> render(AdminProjectEditContact,app));
router.on("/admin/projectseditcontact/:id/edit", ({data})=> render(()=> AdminProjectEditContact(data),app));


router.resolve();

