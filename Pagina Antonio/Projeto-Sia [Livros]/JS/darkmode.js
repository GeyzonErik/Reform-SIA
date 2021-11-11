const btndark = document.querySelector('.btndark');
const container = document.querySelector('.container-darkmode');
btndark.onclick = function()
{
this.classList.toggle('active')
container.classList.toggle('active')
}