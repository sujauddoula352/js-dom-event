document.getElementById('Delete-confirm').addEventListener('keyup',function(event){
    const text = event.target.value;
   const deleteButtons= document.getElementById('btn-delete');
    if ( text == 'delete'){
        deleteButtons.removeAttribute('disabled')

    }
    else{
        deleteButtons.setAttribute('disabled',true)
    }
})

document.getElementById('btn-delete').addEventListener('click',function(){
  const secret = document.getElementById('secret-info');
  secret.style.display='none'
})