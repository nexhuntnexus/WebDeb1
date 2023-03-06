const switch_  = document.getElementById('switch')
const block = document.getElementById('block_view')

switch_.addEventListener('click', () =>{
    if(block.style.height=='0px'){
        block.style.height = '100vh';
        console.log('full');
    } 
    else block.style.height = '0'
    console.log(block.style.height)
})