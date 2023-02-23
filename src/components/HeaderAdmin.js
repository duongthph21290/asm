const headeradm = () => {
    return (
        `
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
          <div class="container">
              <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                   <li class="nav-item">
                          <a href="/"class="nav-link">Home</a>
                      </li>
                      <li class="nav-item">
                          <a href="/admin/projects" class="nav-link">About</a>
                      </li>
                      <li class="nav-item">
                          <a href="/admin/blog" class="nav-link">Blog</a>
                      </li>
                      <li class="nav-item last-item">
                          <a href="/admin/contact" class="nav-link">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      `
    )
}

export default headeradm;