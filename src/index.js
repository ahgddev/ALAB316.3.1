let mainEl = document.getElementsByTagName("main")
mainEl[0].style.backgroundColor = "var(--main-bg)"
mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>"
mainEl[0].classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around")


// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//Create Nav
for (link of menuLinks){
   let newLink = topMenuEl.appendChild(document.createElement("a"))
   newLink.href = link.href
   newLink.innerText = link.text
   console.log(link.href, link.text)
}
//Part 3: Creating the Submenu
 let subMenuEl = document.getElementById("sub-menu")
    subMenuEl.style.height = "100%";
    subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
    subMenuEl.classList.add("flex-around");
    subMenuEl.style.position = "absolute";
    subMenuEl.style.top = "0";
 
//Part 5: Adding Submenu Interaction
function buildSubmenu(subArray){
    //Make the submenu items, removing any old ones first.
    while (subMenuEl.firstChild) {
        subMenuEl.removeChild(subMenuEl.firstChild);
    }
    for(linkItem of subArray){
        let newLink = subMenuEl.appendChild(document.createElement("a"))
        newLink.href = linkItem.href
        newLink.innerText = linkItem.text
    }
}

let topMenuLinks = topMenuEl.getElementsByTagName("a")
//Do and check things when clicked
topMenuEl.addEventListener("click", function(event){
    event.preventDefault()
    //Grab the target link's text and grab the matching object from menuLinks
    let currentTargetText = event.target.textContent;
    let targetObject = menuLinks.find(linkObject => linkObject.text == currentTargetText)

    //Part 4: Adding Menu Interaction
    if(!event.target.classList.contains("active")){
        //If the target isn't active, first check if it has sublinks. Then display those sublinks or hide them.
        if(targetObject.hasOwnProperty("subLinks")){
            subMenuEl.style.top = "100%"
            buildSubmenu(targetObject.subLinks)
        } else {
            subMenuEl.style.top = "0"
        }
        for(aLink of topMenuLinks){
            if (aLink != event.currentTarget){
                aLink.classList.remove("active")
            }
        }
        //Remove the active status if the currentTarget has been clicked again and hide the submenu
        if(event.target == event.currentTarget){
            event.target.classList.remove("active")
            subMenuEl.style.top = "0"
        } else {
            event.target.classList.add("active")
            if(currentTargetText == "about"){
                mainEl[0].innerHTML = "<h1>About</h1>"
            }
        }
    } else if(event.target.classList.contains("active")) {
        event.target.classList.remove("active")
        subMenuEl.style.top = "0"
    }
    return !topMenuLinks
  });

//Add interactions to the submenu items for part 5
  subMenuEl.addEventListener("click", function(event){
    event.preventDefault()
    subMenuEl.style.top = 0;
    for(aLink of topMenuLinks){
        aLink.classList.remove("active")
    }
    let currentTargetText = event.target.textContent.toUpperCase();
    console.log(currentTargetText)
    mainEl[0].innerHTML = `<h1> ${currentTargetText} </h1>`
  });