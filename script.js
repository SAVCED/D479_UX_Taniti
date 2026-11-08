function openIfDropdown(id) {
  const target = document.querySelector(id);
  if (target && target.tagName === "DETAILS") target.open = true;
}

document.querySelectorAll(".side-nav a").forEach((link) => {
  link.addEventListener("click", () => openIfDropdown(link.getAttribute("href")));
});

if (location.hash) openIfDropdown(location.hash);

