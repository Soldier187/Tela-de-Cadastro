let B7validator = {
    handleSubmit:(event)=>{
       event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll('input');
    
    B7validator.clearErros();

    for(let i=0;i<inputs.length;i++) {
        let input = inputs[i];
        let check = B7validator.checkInput(input);
        if(check !== true) {
          send = false;
          B7validator.showError(input, check);
        }
    }
    
    
    },
    checkInput:(input) => {
      let rules = input.getAttribute('data-rules');
      
      if(rules !== null) {
         rules = rules.split('|');
         for(let k in rules) {
             let rDetails = rules[k].split('=');
             switch(rDetails[0]){
               case 'required':
                    if(input.value == '') {
                      return 'Preencha o campo.';
                    }
               break;
               case 'min':
                  if(input.value.length < rDetails[1]) {
                    return 'Campo tem que ter pelo menos '+rDetails[1]+' caractes';
                  }
               break;
               case 'min':
             }
         }
      }
      return true;
    },
      showError:(input, error) => {
      input.style.borderColor = '#FF0000'


      let errorElement = document.createElement('div');
      errorElement.classList.add('error');
      errorElement.innerHTML = error;

      input.parentElement.insertBefore(errorElement, input.ElementSibling);

    },
    clearErros:() => {
      let inputs = form.querySelectorAll('input');
      for(let i=0;i<inputs.length;i++){
        inputs[i].style = '';
      }
       
      let errorElements = document.querySelectorAll('.error');
      for(let i=0;i<errorElements.length;i++) {
          errorElements[i].remove();
      }
    }
};



let form = document.querySelector('.b7validator');
form.addEventListener('submit', B7validator.handleSubmit);










//console.log(input[i].value) linha 11 o erro 