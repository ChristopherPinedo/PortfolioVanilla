/* ********** Menu ********** */
((d) => {
    const $navBtn = d.querySelector(".navigation-btn"),
      $navList = d.querySelector(".navigation-list");

    d.addEventListener("click", e => {
      if(e.target.matches(".navigation-btn, .navigation-btn *")){
        $navBtn.classList.toggle("is-active");
        $navList.classList.toggle("is-active");
      }
      if(e.target.matches(".navigation-list a")){
        $navBtn.classList.remove("is-active");
        $navList.classList.remove("is-active");
      }
    });
  })(document);

  /* ********** Accordion ********** */
  ((d) => {
    const $slides = d.querySelectorAll(".slide");
    console.log($slides);
    d.addEventListener("mouseenter", e => {
      switch ($slides) {
        case value:
          
          break;
      
        default:
          break;
      }
    });
    d.addEventListener("mouseleave", e => {

    });
  })(document);