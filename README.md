# RateMyProfessor 
RateMyProfessor Search Add-on
This is a Firefox add-on that provides an easy way to search professors on RateMyProfessor. Simply press the extension icon on the extension bar, and type the NYU professor's name in the pop-up search bar. It will automatically redirect to their RateMyProfessor page. Note, this is limited to NYU professors, as the extenstion was built with NYU students as the core audience.

## Features
Quickly search for professors on RateMyProfessor
Immediately routes to RateMyProfessors.com
Works on any webpage

## Usage
1. Install the add-on in your Firefox browser
2. Click the RMP icon on the extension bar
3. Type in any professor's name in the resulting search bar
4. Automatically be redirected to their RateMyProfessor website

NOTE: This add-on is not affiliated with RateMyProfessor in any way. It is simply a tool that makes it easier to search for professors on their website.

The basic idea is to extract the text inputted in the search bar and redirect to this url: "https://www.ratemyprofessors.com/search/teachers?query="+ [inputted text] + "&sid=U2Nob29sLTY3NQ=="
- Every university has a unique identifier on the RateMyProfessor website
- We decided to limit the results to NYU professors with NYU students as the intended audience.

Notable files include [popup.html](src/popup/popup.html) which renders the search bar, and [search.js](src/popup/search.js) that redirects to the appropriate webpage. 

There is also a JSON file included, called updatedrmp.json in the data directory. This contains all the ratings for NYU professors (though this is not used in this iteration of the extension, it is useful if we'd like to display the results without redirecting to the RateMyProfessor website).

```
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
```