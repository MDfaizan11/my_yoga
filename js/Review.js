document.addEventListener("DOMContentLoaded", () => {
  const hideAnchorTag = () => {
    const targetNode = document.querySelector(
      ".elfsight-app-77309148-6008-4053-8ead-79b7eba1f09f"
    );
    if (targetNode) {
      const anchorTag = targetNode.querySelector("a");
      if (anchorTag) {
        anchorTag.style.display = "none";
      }
    }
  };
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        hideAnchorTag();
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  hideAnchorTag();
});

// ****************

function hideToolbar() {
  var toolbar = document.querySelector(".eapps-widget-toolbar");
  if (toolbar) {
    toolbar.style.display = "none";
    clearInterval(checkInterval); // Stop checking once the element is found and hidden
  }
}

// Check every 500 milliseconds if the toolbar is present
var checkInterval = setInterval(hideToolbar, 500);
