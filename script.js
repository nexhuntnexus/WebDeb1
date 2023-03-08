const switch_  = document.getElementById('switch')
const block = document.getElementById('block_view')


// Get viewport dimensions (remove the dimension of the div)


const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')

setInterval(()=>{
    animateDiv(a);
    animateDiv(b);
    animateDiv(c);
    animateDiv(d);
    animateDiv(switch_);
}, 5000)


function makeNewPosition(){
    const h = window.innerHeight - 50;
    const w = window.innerWidth - 50;
    
    
    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    myclass.style.transform=`translate(${newq[0]}px, ${newq[1]}px)`;
};

a.addEventListener('mouseenter', ()=>{
    a.style.transform='translate(0,0);'
})


switch_.addEventListener('click', () =>{
    console.log('ads');
    if(block.style.height=='0px'){
        block.style.height = '200vh';
        console.log('full');
    } 
    else block.style.height = '0'
    console.log(block.style.height)
})
