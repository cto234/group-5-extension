# RateMyProfessor 
RateMyProfessor Search Add-on
This is a Firefox add-on that provides an easy way to search for professors on RateMyProfessor. Simply select some text on any webpage and right-click to search for that text on RateMyProfessor. The search results will be displayed in a dropdown menu.

Features
Quickly search for professors on RateMyProfessor
Display search results in a convenient dropdown menu
Works on any webpage
Usage
Install the add-on in your Firefox browser
Select some text on any webpage
Right-click and select "Search on RateMyProfessor"
The search results will be displayed in a dropdown menu
Note
This add-on is not affiliated with RateMyProfessor. It is simply a tool that makes it easier to search for professors on their website.


The basic idea is extract the selectedText and redirect to this url: "https://www.ratemyprofessors.com/search/teachers?query="+ selectedText + "&sid=U2Nob29sLTY3NQ=="

The main.js in content_scripts is to monitor the mouse and selectedText.
The search.js in popup is to get the url

I have also uploaded a json file called updatedrmp.json in data directory with all the rating for NYU professors, which have all the rating information for each professor. We could use this data if we want to display ratings immediately


<code>
├── src
│   ├── popup
│   │   └── search.js
│   ├── manifest.json
│   ├── icon
│   ├── css
│   │   └── main.css
│   └── content_scripts
│       └── main.js
├── data
│   └── updatedrmp.json
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── AUTHORS.md
</code>