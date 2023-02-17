import nav from './nav';

const header = () => {
  return (
    `
<header class="header">
<div class="container">
    <div class="header-content">
        <h4 class="header-subtitle" >Hello, I am</h4>
        <h1 class="header-title">Duong</h1>
        <h6 class="header-mono" >Frond end Developer</h6>
    </div>
</div>
</header>
${nav()}
`

  )
}

export default header;


