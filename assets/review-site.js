(function () {
  const sections = document.querySelectorAll(".article-list");

  sections.forEach((section) => {
    const countTarget = document.querySelector(`[data-count-for="${section.id}"]`);
    const count = section.querySelectorAll(".article-item").length;
    if (countTarget) countTarget.textContent = String(count);
  });
})();
