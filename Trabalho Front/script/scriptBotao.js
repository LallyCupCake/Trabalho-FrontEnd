function anda() 
{
    let background = document.querySelector('.background')
    let circulo = document.querySelector('.circulo')
    if (circulo.style.left != '40px')  
    {
        circulo.style.left = '40px'
        background.style.width = '70px'
        document.body.style.background = 'gray'
        document.body.style.color = 'white'
    } else 
    {
        circulo.style.left = '0px'
        background.style.width = '0px'
        document.body.style.background = 'white'
        document.body.style.color = 'gray'
    }
}