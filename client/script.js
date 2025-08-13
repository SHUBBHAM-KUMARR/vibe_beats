const searchInit = document.getElementById('search-init')
searchInit.addEventListener('click',()=>{
  document.getElementById('search-box').classList.remove('hidden')
  searchInit.classList.add('hidden')
})