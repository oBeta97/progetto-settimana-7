window.addEventListener('load', function (event) {
    const kakapoId = new URLSearchParams(location.search).get('kakapoId');
    const backOfficeTitleSpan = this.document.getElementById('backOfficeTitleSpan');
    const submitButton = this.document.getElementById('submitButton');
    const kakapoImgUrl = this.document.getElementById('kakapoImgUrl');
    const kakapoImg = this.document.getElementById('kakapoImg');
    const kakapoImgAlt = this.document.getElementById('kakapoImgAlt');
    const insertKakapoForm = this.document.getElementById('insertKakapo');

    if(kakapoId){
        backOfficeTitleSpan.innerText = 'Modifica';
        submitButton.innerText = 'Changhe the kakapo!'
    }
    else{
        backOfficeTitleSpan.innerText = 'Inserisci';
        submitButton.innerText = 'Add the kakapo!'
    }


    kakapoImgUrl.addEventListener('focusout', function (event){
        kakapoImg.classList.remove('d-none');
        kakapoImgAlt.classList.add('d-none');

        kakapoImg.src = event.target.value;

    });

    insertKakapoForm.addEventListener('submit', function(event){
        event.preventDefault();

        const kakapoName = document.getElementById('kakapoName');
        const kakapoDescription = document.getElementById('kakapoDescription');
        const kakapoBrand = document.getElementById('kakapoBrand');
        const kakapoPrice = document.getElementById('kakapoBrand');

        const newKakapo = new Kakapo(
            kakapoName.value,
            kakapoDescription.value,
            kakapoBrand.value,
            kakapoImgUrl.value,
            kakapoPrice.value,
        )


        kakapoId ? UpdateKakapo(kakapoId, newKakapo) : SetNewKakapo(newKakapo);


    })

});


async function SetNewKakapo(kakapo){

    console.log(await CreateKakapo(kakapo));

}

async function UpdateKakapo(kakapoId, kakapo){

}