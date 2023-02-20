import header from "../components/header"
import about from "./about"
import resume from "./resume"
import blog from "./blog"
import contact from "./contact"
import footer from "../components/footer"






const HomePage = () => {
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

export default HomePage;