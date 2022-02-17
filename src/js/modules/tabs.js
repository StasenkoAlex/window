const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tabs = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTabsContent() {
    content.forEach((item) => {
      item.style.display = 'none';
    });
    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  }

  function showTabsContent(i = 0) {
    content[i].style.display = 'block';
    tabs[i].classList.add(activeClass);
  }
  hideTabsContent();
  showTabsContent();

  header.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
    ) {
      tabs.forEach((tab, index) => {
        if (target == tab || target.parentNode == tab) {
          console.log('inner');
          hideTabsContent();
          showTabsContent(index);
          tab.classList.add(activeClass);
        }
      });
    }
  });
};
export default tabs;
