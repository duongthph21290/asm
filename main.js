import "bootstrap/dist/css/bootstrap.min.css";
const app = document.querySelector("#app");


import { render, router } from "./src/lib";
import HomePage from "./src/page/HomePage";
import Projects from "./src/page/Projects";
import Projects1 from "./src/page/Projects1";
import Projects2 from "./src/page/Projects2";
import AdminProjectsAddPage from "./src/admin/projects-add";
import AdminProjectEditPage from "./src/admin/projects-edit";
import AdminProjectsPage from "./src/admin/projects";




router.on("/",()=> render(HomePage,app));
router.on("/about",()=> render(Projects,app));
router.on("/blog", ()=> render(Projects1,app));
router.on("/contact", ()=> render(Projects2,app))
router.on("/admin/projectsadd",()=> render(AdminProjectsAddPage,app));
router.on("/admin/projects",()=> render(AdminProjectsPage,app));
router.on("/admin/projectsedit" , () => render(AdminProjectEditPage,app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectEditPage(data), app));


router.resolve();

