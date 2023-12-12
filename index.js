let dynamicImg = document.getElementById('dynamicImg');//dynamicImg
let sax = document.getElementById('sax');
let qalad = document.getElementById('qalad');

const dynamicImgs = ["biixi1.png", "farmajo.png", "geelle.png", "cirro.png","xasan.png"];
//function sawirada ku soo celinaaayo 

function kuCelceli(){
    let takeRandom = Math.floor((Math.random()* dynamicImgs.length))
    dynamicImg.style.backgroundImage = `url("./image/${dynamicImgs[takeRandom]}")`;

}
let theTimer = setInterval(kuCelceli, 100);
const marKaleBIlow = () => {
    setTimeout(function() {
        theTimer.clearInterval(kuCelceli, 100);
        document.getElementById('btn').disable = false;
        document.getElementById('btn').style.opacity = '100%'
     },2000);

}
let saxdey = 0;
let qaladay = 0;

const istaag = () => {
    if(dynamicImg.style.backgroundImage === `url("./image/${dynamicImgs[0]}")`) {
        saxdey++;
        sax.innerText = saxdey;
        clearInterval(theTimer)

        document.getElementById('btn').disable = true;
        document.getElementById('btn').style.opacity = '50%'

        marKaleBIlow();
    }else{
        qaladay++;
        qalad.innerText = qaladay;
        clearInterval(theTimer)

        document.getElementById('btn').disable = true;
        document.getElementById('btn').style.opacity = '50%'

      marKaleBIlow();

    }
}