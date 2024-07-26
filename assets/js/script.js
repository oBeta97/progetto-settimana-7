window.addEventListener('load', function(event){

    GetKakapos();
    
});


async function GetKakapos(){
    console.log(await ReadKakapo());
}