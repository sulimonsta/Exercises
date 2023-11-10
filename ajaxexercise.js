function addGif(res) { 
    let numResults = res.data.length; // Get the number of results in the response data
    
    if (numResults) { // Check if there are results
      let randomIdx = Math.floor(Math.random() * numResults); // Generate a random index within the range of results
      let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" }); 
      let $newGif = $("<img>", { 
        src: res.data[randomIdx].images.original.url, // 
        class: "w-100" // 
      });
      $newCol.append($newGif); 
      $gifArea.append($newCol);
    }
  }
  
  /* handle form submission: clear search box & make ajax call */
  $("form").on("submit", async function(evt) { // Attach a submit event handler to the form element
    evt.preventDefault(); // Prevent the default form submission behavior
    
    let searchTerm = $searchInput.val(); // Get the value from the search input field
    $searchInput.val(""); // Clear the search input field
    
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm, //
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" // Set the "api_key" parameter
      }
    });
    addGif(response.data); // Call the "addGif" function with the data from the API response
  });
  
  /* remove gif */
  $("#remove").on("click", function() { // 
    $gifArea.empty(); //
  });