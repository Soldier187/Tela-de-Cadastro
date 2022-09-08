let B7validator = {
    handleSubmit:(event)=>{
    event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll('input');

    for(let i=0;i<inputs.length;i++) {
        let input = inputs[i];
        let check = B7validator.checkInput(input);
        if(check !== true) {
          send = false;
          B7validator.showError(input, check);
        }
    }
    
    
    if(send) {
        form.submit();
       
      }
    },
    checkInput:(input) => {
      let rules = input.getAttribute('data-rules');
      
      if(rules !== null) {
         rules = rules.split('|');
         for(let k in rules) {
             let rDetais = rules[k].split('=');
             switch(rDetais[0]){
               case 'required':
                    if(input.value == '') {
                      return 'Campo não pode ser vazio.';
                    }
               breack;
               case 'min':

               bre;
             }
         }
      }
      return true;
    }
      showError:(input, error) => {
      input>StyleSheet.borderColor = '#FF0000'

    }
};



let form = document.querySelector('.b7validator');
form.addEventListener('.submit',)
