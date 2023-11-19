const log = console.log

const updateTheme = (bgColor,fontColor)=>{
    document.documentElement.style.setProperty('--bg-color',bgColor)
    document.documentElement.style.setProperty('--font-color',fontColor)
    
    const bodyColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');
    const color = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
    
    log(`updated background color to ${bodyColor} and color to ${color}`)
}

const lightThemeButton = document.querySelector('#light-theme-button');
const darkThemeButton = document.querySelector('#dark-theme-button');
const colorThemeButton = document.querySelector('#color-theme-button');

lightThemeButton.addEventListener('click', ()=>updateTheme('white',"#333"))
darkThemeButton.addEventListener('click', ()=>updateTheme("#333",'white'))
colorThemeButton.addEventListener('click', ()=>updateTheme("#0766AD",'#F3F3F3'))