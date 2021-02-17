function searchCards() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('h4');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].parentElement.parentElement.parentElement.style.display = "";
    } else {
      li[i].parentElement.parentElement.parentElement.style.display = "none";
    }
  }
}

function filterCards(filterValue) {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = filterValue;
  filter = filterValue;
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('h6');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if ("All".localeCompare(filter) == 0) {
    li[i].parentElement.parentElement.parentElement.style.display = "";
    }
        
    else { if (txtValue.indexOf(filter) > -1) {
      li[i].parentElement.parentElement.parentElement.style.display = "";
    } else {
      li[i].parentElement.parentElement.parentElement.style.display = "none";
    }}
  }
}