(() => {

    document.addEventListener("mouseup", function(event) {
        var selectedText = window.getSelection().toString();
        if (selectedText.length > 0) {
          chrome.runtime.sendMessage({
            type: "search",
            text: selectedText
          });
        }
      });
})();
  