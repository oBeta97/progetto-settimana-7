window.addEventListener('load', function(event){

    UpdateShopRow();


    
});




async function UpdateShopRow(){
    const shopRow = document.getElementById('shopRow');
    const kakapoWaiter = document.getElementById('kakapoWaiter');
    
    shopRow.innerHTML = '';
    kakapoWaiter.classList.toggle('d-none');

    
    const kakapos = await ReadKakapo();

    if(!kakapos){
        shopRow.innerHTML = `
            <h4 class='text-centered text-danger'> No Kakapos found :( </h4>
        `
        return;
    }

    kakapos.forEach(kakapo => {
        shopRow.innerHTML += `
            <section class="col">
                <article class="card">
                    <img src="${kakapo.imageUrl}"
                        class="card-img-top" alt="${kakapo.name} img">
                    <div class="card-body">
                        <h2 class="card-title">${kakapo.name}</h2>
                        <p class="card-text">${kakapo.description}</p>
                        <a href="./backoffice.html?kakapoId=${kakapo['_id']}" class="btn btn-primary"
                            style="background-color: #b3db72;">Details</a>
                    </div>
                </article>
            </section>
        
        `
    });

    kakapoWaiter.classList.toggle('d-none');
}





