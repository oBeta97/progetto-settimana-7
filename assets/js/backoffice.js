const kakapoName = document.getElementById('kakapoName');
const kakapoDescription = document.getElementById('kakapoDescription');
const kakapoBrand = document.getElementById('kakapoBrand');
const kakapoPrice = document.getElementById('kakapoPrice');
const kakapoImgUrl = this.document.getElementById('kakapoImgUrl');
const kakapoImg = this.document.getElementById('kakapoImg');
const kakapoImgAlt = this.document.getElementById('kakapoImgAlt');

window.addEventListener('load', function (event) {
    const kakapoId = new URLSearchParams(location.search).get('kakapoId');
    const backOfficeTitleSpan = this.document.getElementById('backOfficeTitleSpan');
    const submitButton = this.document.getElementById('submitButton');
    const insertKakapoForm = this.document.getElementById('insertKakapo');

    if (kakapoId) {
        backOfficeTitleSpan.innerText = 'Modifica';
        submitButton.innerText = 'Changhe the kakapo!'

        SetInputs(kakapoId);
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

});


async function SetNewKakapo(kakapo) {

    const createdKakapo = await CreateKakapo(kakapo);

    if (createdKakapo)
        alert('A new Kakapo has born! We are super happy about that, right? 😡');

}

async function EvolveKakapo(kakapoId, kakapo) {

    const updatedKakapo = await UpdateKakapo(kakapoId, kakapo);

    if (updatedKakapo){
        alert(`${kakapo.name} has born! Now he is a super Kakapo!`);
        SetInputs(kakapoId);
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