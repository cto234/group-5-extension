function openTab(){
    
    var newTab = browser.tabs.create({
        url:'https://www.ratemyprofessors.com/',
        active:true
    })
}

browser.browserAction.onClicked.addListener(openTab)