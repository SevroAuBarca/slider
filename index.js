document.addEventListener("DOMContentLoaded", () => {
  const slider = [...document.querySelectorAll(".slider_list li a")];
  const items = [...document.querySelectorAll(".list_item")];
  let curr, next;
  slider.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      console.log(slider);
      console.log(index);

      for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains("open")) {
          curr = i;
          break;
        }
      }
      items[curr].classList.replace("open", "close");
      if (items[index].classList.contains("close")) {
        items[index].classList.replace("close", "open");
      }
      console.log(items);
    });
  });
});
