class Kakapo {
    name = '';
    description = '';
    brand = '';
    imageUrl = '';
    price = 0;

    constructor(_name = '', _description = '', _brand = '', _imageUrl = '', _price = 0) {
        this.name = _name;
        this.description = _description;
        this.brand = _brand;
        this.imageUrl = _imageUrl;
        this.price = _price;
    }
}


class MyModal {
    targetDivSelector = 'body';
    modalId = 'exampleModal';
    modalTitle = '';
    modalText = '';
    modalButtons = '';
    modalDataSet = {};
    closable = true;
    bgColor = 'light';

    constructor(_modalId, _modalTitle, _modalText, _modalButtons, _modalDataSet, _closable, _bgColor) {
        this.modalId = _modalId;
        this.modalTitle = _modalTitle;
        this.modalText = _modalText;
        this.modalButtons = _modalButtons;
        this.modalDataSet = _modalDataSet;
        this.closable = _closable;
        this.bgColor = _bgColor ?? this.bgColor;


        const targetDiv = document.querySelector(this.targetDivSelector);

        const modal = document.createElement('div');
        modal.classList.add('modal', 'fade')
        modal.id = _modalId;
        modal.tabIndex = -1;
        modal.setAttribute('aria-hidden', "true");
        if(!_closable){
            modal.setAttribute('data-bs-backdrop',"static")
            modal.setAttribute('data-bs-keyboard',"false")
        }
        // TODO - Fare il parse dei dataset e aggiungere gli attributi al modal così da avere dati accessibili dai pulsanti

        const modalDialog = document.createElement('div');
        modalDialog.classList.add('modal-dialog');

        const modalcontent = document.createElement('div');
        modalcontent.classList.add('modal-content');

        const modalHeader = document.createElement('div');
        modalHeader.classList.add('modal-header');

        const modalTitle = document.createElement('h5');
        modalTitle.classList.add('modal-title');
        modalTitle.innerText = _modalTitle;

        const closableBtn = document.createElement('button');
        closableBtn.type = 'button';
        closableBtn.classList.add('btn-close');
        closableBtn.setAttribute('data-bs-dismiss', 'modal');
        closableBtn.setAttribute('aria-label', 'Close');

        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');

        const modalText = document.createElement('p');
        modalText.innerText = _modalText;

        const modalFooter = document.createElement('div');
        modalFooter.classList.add('modal-footer');
        modalFooter.innerHTML = _modalButtons;


        modalHeader.appendChild(modalTitle);
        if (_closable)
            modalHeader.appendChild(closableBtn);

        modalBody.appendChild(modalText);

        modalcontent.appendChild(modalHeader);
        modalcontent.appendChild(modalBody);
        modalcontent.appendChild(modalFooter);

        modalDialog.appendChild(modalcontent);

        modal.appendChild(modalDialog);

        targetDiv.appendChild(modal);

    }


    show = function () {
        let modal = new bootstrap.Modal(document.getElementById(this.modalId), { keyboard: false });
        console.log('modal', modal);
        modal.show()

        // modal.addEventListener('hidden.bs.modal', function(){})
    }


}