const emailInput = document.getElementById('email-field')
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', e=>{
    e.preventDefault()
    if (emailInput.validity.patternMismatch){
        emailInput.parentNode.classList.add('error-m')
        emailInput.addEventListener('input', e=>{
            if (!emailInput.validity.patternMismatch){
                emailInput.parentNode.classList.remove('error-m')}
        })
    }
})