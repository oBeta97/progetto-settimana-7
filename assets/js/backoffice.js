const kakapoName = document.getElementById('kakapoName');
const kakapoDescription = document.getElementById('kakapoDescription');
const kakapoBrand = document.getElementById('kakapoBrand');
const kakapoPrice = document.getElementById('kakapoPrice');
const kakapoImgUrl = this.document.getElementById('kakapoImgUrl');
const kakapoImg = this.document.getElementById('kakapoImg');
const kakapoImgAlt = this.document.getElementById('kakapoImgAlt');
const insertKakapoForm = this.document.getElementById('insertKakapo');

window.addEventListener('load', function (event) {

    const kakapoId = new URLSearchParams(location.search).get('kakapoId');

    const backOfficeTitleSpan = this.document.getElementById('backOfficeTitleSpan');
    const submitButton = this.document.getElementById('submitButton');
    const resetForm = this.document.getElementById('resetForm');

    if (kakapoId) {
        backOfficeTitleSpan.innerText = 'Modifica';
        submitButton.innerText = 'Changhe the kakapo!'

        SetInputs(kakapoId);
        AddDeleteButton(kakapoId);
    }
    else {
        backOfficeTitleSpan.innerText = 'Inserisci';
        submitButton.innerText = 'Add the kakapo!'
    }


    kakapoImgUrl.addEventListener('focusout', function (event) {
        kakapoImg.classList.remove('d-none');
        kakapoImgAlt.classList.add('d-none');

        kakapoImg.src = event.target.value;

    });

    insertKakapoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newKakapo = new Kakapo(
            kakapoName.value,
            kakapoDescription.value,
            kakapoBrand.value,
            kakapoImgUrl.value,
            kakapoPrice.value,
        )


        kakapoId ? EvolveKakapo(kakapoId, newKakapo) : SetNewKakapo(newKakapo);


    })

    resetForm.addEventListener('click', function(event){
        event.preventDefault() 
        const reset = confirm('Vuoi resettare il form?')
        if(reset)
            insertKakapoForm.reset()
    });

});


async function SetNewKakapo(kakapo) {

    const addNewKakapo = confirm('Do you want to give birth to the kakapo? ')

    if(addNewKakapo){
        const createdKakapo = await CreateKakapo(kakapo);
    
        if (createdKakapo){
            alert('A new Kakapo has born! We are super happy about that, right? 😡');
            window.location.replace(`?kakapoId=${createdKakapo['_id']}`);
        }
    }
    else{
        insertKakapoForm.reset()
    }

}

async function EvolveKakapo(kakapoId, kakapo) {

    const updatedKakapo = await UpdateKakapo(kakapoId, kakapo);

    if (updatedKakapo){
        alert(`${kakapo.name} has born! Now he is a super Kakapo!`);
        SetInputs(kakapoId);
        let modal = new bootstrap.Modal()
    }


}

async function SetInputs(kakapoId) {

    const uselessCheckBox = document.getElementById('uselessCheckBox');

    const kakapoDetails = await ReadKakapo(kakapoId);

    console.log(kakapoDetails);

    kakapoName.value = kakapoDetails.name
    kakapoDescription.value = kakapoDetails.description
    kakapoBrand.value = kakapoDetails.brand
    kakapoImgUrl.value = kakapoDetails.imageUrl
    kakapoPrice.value = kakapoDetails.price
    
    kakapoImg.classList.remove('d-none');
    kakapoImgAlt.classList.add('d-none');
    kakapoImg.src = kakapoDetails.imageUrl

    uselessCheckBox.checked = true;

}

async function AddDeleteButton(kakapoId){
    
    const formButtonsContainer = document.getElementById('formButtonsContainer');

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-danger';
    button.innerText = 'Kill the Kakapo!';

    button.addEventListener('click',function(event){
        const theUserIsAMonster = confirm('Are you a monster or what?! Want you to kill this cuttie parrot? 😭🦜');

        if(theUserIsAMonster){
            DeleteKakapo(kakapoId);
            alert(`You killed it!... What a monster you are! 😭`);
            window.location.replace(`./index.html`);
        }

    });

    formButtonsContainer.appendChild(button);

}