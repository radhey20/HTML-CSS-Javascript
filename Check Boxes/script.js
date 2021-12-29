checkboxes = document.querySelectorAll('input[type=checkbox]')
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

function handleCheck(e)
{
    console.log(checkboxes);
    if (e.shiftKey && this.checked)
    {
        let ischeckboxequal = false;
        checkboxes.forEach(checkbox => {
            if(checkbox===this || ischeckboxequal ===false)
            {
checkbox.checked=true;
if (checkbox===this)
{
    ischeckboxequal = true;
}
            }
        } 
        )
    }


}