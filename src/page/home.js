import footer from "../components/footer"
import header from "../components/header"
import about from "./about"
import blog from "./blog"
import contact from "./contact"
import resume from "./resume"


const homePage = () => {
  return (
    `
    ${header()}
    ${about()}
    ${resume()}
    ${blog()}
    ${contact()}
    ${footer()}
    `
  )
}

export default homePage