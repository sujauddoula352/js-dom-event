function handleOnclick(){
    const handleStatus = document.getElementById('handle-status');
    handleStatus.innerText = 'Handled by function attached onclick attribute'
}
// potion 2
document.getElementById('event-listener').addEventListener('click',function(){
   document.body.style.backgroundColor = 'pink'
    
})
// option 2 recept
document.getElementById('btn-update').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
   const innerText = inputField.value;
   const p =document.getElementById('default-text-display');
   p.innerText = innerText;
   inputField.value='';
})