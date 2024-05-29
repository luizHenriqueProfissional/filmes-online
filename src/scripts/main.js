document.addEventListener('DOMContentLoaded',function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
         const abaAlvo = botao.target.dataset.tabButton;
         const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
         escondeTodasAbas();
         aba.classList.add('hero__container__menu__is--open');
         removeBotaoAtivo();
         botao.target.classList.add('is--open');
         
        })
     }
    })


function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('hero__container__menu__is--open');
        
    }
}
function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('is--open')
    }
}