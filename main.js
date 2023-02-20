import "bootstrap/dist/css/bootstrap.min.css";
const app = document.querySelector("#app");


import { render, router } from "./src/lib";
import HomePage from "./src/page/HomePage";
import AdminProjectsAddPage from "./src/admin/projects-add";
import AdminProjectEditPage from "./src/admin/projects-edit";
import AdminProjectsPage from "./src/admin/projects";



router.on("/",()=> render(HomePage,app));
router.on("/admin/projectsadd",()=> render(AdminProjectsAddPage,app));
router.on("/admin/projects",()=> render(AdminProjectsPage,app));
router.on("/admin/adminprojectseditpage" , () => render(AdminProjectEditPage,app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectEditPage(data), app));


router.resolve();

