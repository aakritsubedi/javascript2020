function changeTitle() {
  let title = document.getElementsByTagName('h2')[0].innerText;
  document.title = title;
}
changeTitle();