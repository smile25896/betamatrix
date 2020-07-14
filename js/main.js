document.querySelectorAll('button.toggle-more').forEach(item=>{
  item.addEventListener('click', (e)=>{
    let target = e.target.dataset.target
    document.querySelector(target).classList.add('show')
    e.target.classList.add('hide-box')
  })
})