function search() {
  const form = document.getElementById("form");                
  form.addEventListener("submit", function (event) {            
    event.preventDefault();                                     //Default action is to open a new page
    let inputText = document.getElementById("searchBar").value; 
    inputText = URLify(inputText);
    console.log(inputText)
    const url = "https://www.ratemyprofessors.com/search/teachers?query="+ inputText + "&sid=U2Nob29sLTY3NQ=="
    window.open(url, "_blank");
  });
}

document.addEventListener('DOMContentLoaded', function() {  //Must wait for DOM content to load before anything can be done
  console.log('DOM content loaded');
  search()                                                  //Runs search function
});

function URLify(input)      //Replaces spaces with %20 to make a string into a url slug
{
    for(let i=0 ; i<input.length ; i++)
    {
        if(input[i] == ' ')
            input = input.replace(input[i], '%20');
    }
    return input;
}