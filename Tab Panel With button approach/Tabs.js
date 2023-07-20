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
    tabPanels[i].hidden = !selected;
    /* Displaying the respective tab panel */
    tabPanels[i].style.display = "block";
    /* Placing the focus on the tab panel */
    tabPanels[i].focus();
    
        // Hide the previous content when activating a new tab
        if (!selected) {
          tabPanels[i].style.display = "none";
        }

  });
}
