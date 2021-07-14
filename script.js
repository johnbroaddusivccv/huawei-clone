const navItems = document.querySelectorAll('.unclicked')

console.log(navItems)
navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navItem.classList.toggle('clicked')
  })
})
