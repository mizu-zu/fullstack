window.onscroll = function() {
  const button = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
  } else {
      button.style.display = "none";
  }
};

document.getElementById("scrollToTop").onclick = function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
};
