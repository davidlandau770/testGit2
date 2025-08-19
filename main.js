const search = document.getElementById("SearchInput")
let searchInput = "";
search.addEventListener("input", (event) => {
    searchInput = search.value
    console.log(searchInput);
})

