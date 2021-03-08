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

function searchCardswithHeader(search_inp=true,search_text="") {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  if(search_inp){
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
  }
  else{
    filter = search_text.toUpperCase();
  }
  ul = document.getElementById("myUL");
  li = ul.getElementsByClassName('card');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue=a.getElementsByTagName('h4')[0].innerText;
    txtValue+=" "+a.getElementsByTagName('h6')[0].innerText;
    txtValue+=" "+a.getElementsByTagName('p')[0].innerText;
    if(a.getElementsByClassName('card-header').length > 0){
      txtValue+=" "+a.getElementsByClassName('card-header')[0].children[0].innerText;
    }

    // txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
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

function filterUseCaseCards(filterValue) {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = filterValue;
  filter = filterValue;
  ul = document.getElementById("myUL");
  li = ul.getElementsByClassName('card-header');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].children[1];
    txtValue = a.textContent || a.innerText;
    if ("All".localeCompare(filter) == 0) {
    li[i].parentElement.style.display = "";
    }

    else { if (txtValue.indexOf(filter) > -1) {
      li[i].parentElement.style.display = "";
    } else {
      li[i].parentElement.style.display = "none";
    }}
  }
}

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

function searchIndustryCards() {
  searchAnIndusCard("success-stories-div",true,true,true,true);
  // searchAnIndusCard("case-studies-ind",true,true,true,true);
  searchAnIndusCard("pov-ind",false,true,true,true);
  // searchAnIndusCard("whitepaper-ind",false,true,true,true);
  searchAnIndusCard("bus-solns-indus-div",false,true,true,true);
}


function searchAnIndusCard(section_name,header = true, title=true, subtitle=true, para=true){
  var input, filter, the_div, list_of_cards, a, i, txtValue, lh5,lh6;
  filter = document.getElementById("indus-searchbar").value.trim().toLowerCase();
    // console.log(filter);
    if(filter===""){
      return null;
    }
  the_div = document.getElementById(section_name);
  list_of_cards = the_div.getElementsByClassName('card');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < list_of_cards.length; i++) {
    filter_conditions = list_of_cards[i].getAttribute("filter-conditions");
    if(title){
    filter_conditions+= " " + list_of_cards[i].getElementsByClassName('card-title')[0].innerText;
  }
    if(header){
      filter_conditions+= " " + list_of_cards[i].getElementsByClassName('card-header')[0].children[0].innerText;
    }
     if(subtitle){
      lh5=list_of_cards[i].getElementsByClassName('card-body')[0].getElementsByTagName('h5');
      for(j=0;j<lh5.length;j++){
        filter_conditions+= " " + lh5[j].innerText;
      }
      lh6=list_of_cards[i].getElementsByClassName('card-body')[0].getElementsByTagName('h6');
      for(j=0;j<lh6.length;j++){
        filter_conditions+= " " + lh6[j].innerText;
      }

  }
   if(para){
    filter_conditions+= " " + list_of_cards[i].getElementsByClassName('card-body')[0].getElementsByTagName('p')[0].innerText;
  }
     if (filter_conditions.toLowerCase().indexOf(filter) > -1) {
      list_of_cards[i].style.display = "";
    } else {
      list_of_cards[i].style.display  = "none";    }
  }
}

var store;
function remove_store() {
  // load persistent store after the DOM has loaded
  if(!(document.getElementById("success-stories") === null)){
    store = new Persist.Store('IAT Website');
    store.remove('client');
    store.remove('industry');
    console.log("Removed");
  }
}
function get_store() {
  if(!(document.getElementById("use-cases-container") === null)){
      store = new Persist.Store('IAT Website');
      console.log(store.get('client'));
      console.log(store.get('industry'));
      console.log("Got");
      // alert(store.get('client'));
      if(!(store.get('industry')===null || store.get('client')===null)){
        // redirected from industry page
        var flag=true
        var ls_sel = document.getElementById("mySelect").children;
        for(i=0; i<ls_sel.length; i++){
          if(ls_sel[i].getAttribute("value") === store.get('industry')){
            document.getElementById("mySelect").selectedIndex = i;
            document.getElementById("mySelect").dispatchEvent(new Event('change'));
            flag = false
          }
        }
        if(flag){
          document.getElementById("mySelect").selectedIndex = 0;
          document.getElementById("mySelect").dispatchEvent(new Event('change'));
        }
        console.log("Filtered");
        //search through cards
        var ls_sel = document.getElementById("myUL").getElementsByClassName("card");
        for(i=0;i<ls_sel.length;i++){
          if(ls_sel[i].getAttribute("client")===null){
            console.log("Card missing a required attribute");
          }else{
            if(ls_sel[i].getAttribute("client").toLowerCase() === store.get("client").toLowerCase()){
              ls_sel[i].style.display  = "";
            }else{
              ls_sel[i].style.display  = "none";
            }
          }
        }
        console.log("Client Set");
        store.remove('client');
        store.remove('industry');
        console.log("Removed");
      }
    }

  }


$('body').on('click','.related-uses-cases',function(event){
  store = new Persist.Store('IAT Website');
  store.set('client',this.parentElement.parentElement.parentElement.getAttribute("name"));
  store.set('industry',this.parentElement.parentElement.parentElement.parentElement.getAttribute("name"));
  console.log("Set");
  return true;
});
