// Get all tab elements and tab panels
const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

// Add event listener to each tab for click and keydown events
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    activateTab(index);
  });

  tab.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      activateTab(index);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      // Focus previous tab when pressing Left or Up arrow keys
      const previousIndex = (index - 1 + tabs.length) % tabs.length;
      tabs[previousIndex].focus();
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      // Focus next tab when pressing Right or Down arrow keys
      const nextIndex = (index + 1) % tabs.length;
      tabs[nextIndex].focus();
    }
  });
});

// Function to activate a specific tab
function activateTab(index) {
  tabs.forEach((tab, i) => {
    const selected = i === index;
    tab.setAttribute('aria-selected', selected);
    tab.setAttribute("tabindex", selected ? "0" : "-1");

    // Show or hide the tab panel based on the selected state
    tabPanels[i].hidden = !selected;
    
    // Set focus on the selected tab panel
    if (selected) {
      tabPanels[i].style.display = "block";
      //Maintaining the focus on the selected tab.
      tabs[i].focus();
    } else {
      tabPanels[i].style.display = "none";
    }
  });
}
