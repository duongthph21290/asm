import "bootstrap/dist/css/bootstrap.min.css";
import { render, router } from "./src/lib";
import homePage from "./src/page/home";
import AdminProjectsAddPage from "./src/admin/projects-add";
import AdminProjectEditPage from "./src/admin/projects-edit";
import AdminProjectsPage from "./src/admin/projects";


const app = document.querySelector("#app");

router.on("/admin/projectsadd",()=> render(AdminProjectsAddPage,app));
router.on("/admin/projects",()=> render(AdminProjectsPage,app));
router.on("/admin/adminprojectseditpage" , () => render(AdminProjectEditPage,app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectEditPage(data), app));
router.on("/",()=> render(homePage,app));

router.resolve();

