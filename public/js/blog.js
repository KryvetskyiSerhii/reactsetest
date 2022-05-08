const searchOpenButton = document.querySelector('.sidenav__menu-btn')
const searchInputBlock = document.querySelector('.search')
const searchInput = document.querySelector('.sidenav__menu-input')
const searchButtonGo = document.querySelector('.btn-go')
const searchField = document.querySelectorAll('.container')

console.log(searchField);


const changeClass = () => {
    searchInputBlock.classList.add('active')
}

const searchContent = () => {
    let name = searchInput.value.toLowerCase()
    let targetId = ''
    searchField.forEach(e => {
        if(e.innerText.toLocaleLowerCase().includes(name)) {
            targetId = e.id
            document.getElementById(targetId).scrollIntoView();
        }
})
}


searchOpenButton.addEventListener('click', changeClass)
searchButtonGo.addEventListener('click', searchContent)