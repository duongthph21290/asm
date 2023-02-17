import { render, router } from "./src/lib";
import homePage from "./src/page/home";


const app = document.querySelector("#app");

router.on("/",()=> render(homePage,app));

router.resolve();

