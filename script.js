const LINKS = {
  invite: "https://discord.com/oauth2/authorize?client_id=1089947084473499708&permissions=8&scope=bot%20applications.commands",
  support: "https://discord.gg/3RnenEXjWV"
};

document.querySelectorAll("[data-placeholder]").forEach(link => {
  const type = link.dataset.placeholder;
  if (LINKS[type]) {
    link.href = LINKS[type];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
