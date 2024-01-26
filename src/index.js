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

 let subMenuEl = document.getElementById("sub-menu")
    subMenuEl.style.height = "100%";
    subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
    subMenuEl.classList.add("flex-around");
    subMenuEl.style.position = "absolute";
    subMenuEl.style.top = "0";
 

let topMenuLinks = topMenuEl.getElementsByTagName("a")
topMenuEl.addEventListener("click", function(event){
    event.preventDefault()
    console.log(event.target)
    return !topMenuLinks
  });