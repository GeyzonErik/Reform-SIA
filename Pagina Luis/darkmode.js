const btn = document.querySelector('.btndark');
const container = document.querySelector('.container-dark');
btn.onclick = function()
{
this.classList.toggle('active')
container.classList.toggle('active')
}