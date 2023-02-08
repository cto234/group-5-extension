firefox.contextMenus.create({
    id: "search-selected-text",
    title: "Search selected text",
    contexts: ["selection"],
  });
  
  firefox.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "search-selected-text") {
      searchSelectedText(info.selectionText);
    }
  });
  
  import data from '../../data/updatedrmp.json';

  function searchSelectedText(selectedText) {
    firefox.tabs.create({
      url: "https://www.ratemyprofessors.com/search/teachers?query="+ selectedText + "&sid=U2Nob29sLTY3NQ==",
      //rating: data[selectedText]
    });
  }