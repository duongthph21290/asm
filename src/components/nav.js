
const nav = () => {
    return (
        `
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
          <div class="container">
              <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item">
                          <a href="#home" class="nav-link">Trang chủ</a>
                      </li>
                      <li class="nav-item">
                          <a href="#about" class="nav-link">Giới thiệu</a>
                      </li>
                      
                  </ul>
                  <ul class="navbar-nav brand">
                      <img src="assets/imgs/avatar2.jpg" alt="" class="brand-img">
                      <li class="brand-txt">
                          <h5 class="brand-title">Tran Hai Duong</h5>
                          <div class="brand-subtitle">Web Developer</div>
                      </li>
                  </ul>
                  <ul class="navbar-nav ml-auto">
                   <li class="nav-item">
                          <a href="#resume" class="nav-link">Tóm tắt</a>
                      </li>
                      <li class="nav-item">
                          <a href="#blog" class="nav-link"></a>
                      </li>
                      <li class="nav-item last-item">
                          <a href="#contact" class="nav-link">Liên hệ</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      `
    )
}

export default nav