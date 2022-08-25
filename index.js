let B7validator = {
    handleSubmit:(Event)=>{
        Event.preventDefault();
    }
}







let form = document.querySelector('.b7validator');
form.addEventListener('submit', B7validator.handleSubmit);