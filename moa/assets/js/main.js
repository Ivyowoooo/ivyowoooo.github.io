/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

/* Menu hidden */
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

/*=============== SEARCH ===============*/
const search = document.getElementById("search"),
  searchBtn = document.getElementById("search-btn"),
  searchClose = document.getElementById("search-close");

/* Search show */
searchBtn.addEventListener("click", () => {
  search.classList.add("show-search");
});

/* Search hidden */
searchClose.addEventListener("click", () => {
  search.classList.remove("show-search");
});


/*=========== card Carousel ===============*/

  document.querySelectorAll('.product-card').forEach(card => {
    const options = card.querySelectorAll('.color-options li');
    const images = card.querySelectorAll('.product-image .variant');
    const dots = card.querySelectorAll('.pagination-dots .dot');

    function activateSlide(index) {
      // 切換圖片
      images.forEach(img => img.classList.remove('active'));
      images[index].classList.add('active');

      // 切換文字 active 樣式
      options.forEach(opt => opt.classList.remove('active'));
      options[index].classList.add('active');

      // 切換底下指示點
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    // 點擊文字切換
    options.forEach(opt => {
      opt.addEventListener('click', () => {
        const index = opt.getAttribute('data-index');
        activateSlide(index);
      });
    });

    // 點擊指示點切換
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = dot.getAttribute('data-index');
        activateSlide(index);
      });
    });
  });

  /*=============== section 03 CARD (霧霧圖片卡片) ===============*/
