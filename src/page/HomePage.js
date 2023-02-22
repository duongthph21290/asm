import header from "../components/header"
import about from "./About"
// import resume from "./Resume"
import blog from "./Blog"
import contact from "./Contact"
import footer from "../components/footer"






const HomePage = () => {
  return (
    `
    ${header()}
    ${about()}
    ${blog()}
    ${contact()}
    ${footer()}
    `
  )
}

export default HomePage;