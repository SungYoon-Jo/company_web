const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  console.log("nice~");
}

title.addEventListener("click", handleTitleClick);
