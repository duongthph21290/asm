import footer from "../components/footer"
import header from "../components/header"
import about from "./about"
import blog from "./blog"
import contact from "./contact"
import portfolio from "./portfolio"
import resume from "./resume"


const homePage = () => {
  return (
    `
    ${header()}
    ${about()}
    ${resume()}
    ${portfolio()}
    ${blog()}
    ${contact()}
    ${footer()}
    `
  )
}

export default homePage