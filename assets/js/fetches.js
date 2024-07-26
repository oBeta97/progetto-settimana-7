const connectionData = {
     connectionString: 'https://striveschool-api.herokuapp.com/api/product',
     bearerToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNWI4ZWYyNjBjYzAwMTVjYzBkZGQiLCJpYXQiOjE3MjE5ODE4MzgsImV4cCI6MTcyMzE5MTQzOH0.hXyS_YbY-TesfVFvnVxSCcu1i7Po0LXwYIX9H3adbxY",
}


async function CreateKakapo(newKakapo){
    return await fetch(connectionData.connectionString, {
        method: "POST",
        body: JSON.stringify(newKakapo),
        headers: {
            "Authorization": connectionData.bearerToken,
            'Content-Type': 'application/json',
        },
    }).
    then(function(promise){
        if(!promise.ok)
            throw new Error('Orrore nella chiamata di inserimento dati, Kakapos not allowed :(');

        return promise.json();

    }).
    then(function(kakapo){
        return kakapo;
    }).
    catch(function(error){
        alert(error);
    })
}

async function ReadKakapo(kakapoId){
    
    return await fetch(connectionData.connectionString + `/${kakapoId ?? ''}`, {
        method: "GET",
        headers: {
            "Authorization": connectionData.bearerToken
        },
    }).
    then(function(promise){
        if(!promise.ok)
            throw new Error('Orrore nella chiamata di ricezione dati, Kakapos not found :(');

        return promise.json();
    }).
    then(function(kakapos){

        return kakapos;

    }).
    catch(function(error){
        alert(error);
    });

}

async function UpdateKakapo(kakapoId, updatedKakapo){
    return await fetch(connectionData.connectionString + `/${kakapoId ?? ''}`, {
        headers: {
            method: "PUT",
            body: JSON.stringify(updatedKakapo),
            "Authorization": connectionData.bearerToken,
            'Content-Type': 'application/json',
        }
    }).
    then(function(promise){
        if(!promise.ok)
            throw new Error('Orrore nella chiamata di ricezione dati, Kakapos can\'t change what it is :(');

        return promise.json();
    }).
    then(function(kakapo){

        return kakapo;

    }).
    catch(function(error){
        alert(error);
    });
}

async function DeleteKakapo(){
    return await fetch(connectionData.connectionString, {
        headers: {
            method: "DELETE",
            "Authorization": connectionData.bearerToken,
            'Content-Type': 'application/json',
        }
    }).
    then(function(promise){
        if(!promise.ok)
            throw new Error('Orrore nella chiamata di ricezione dati, Kakapos never die (like legends) :(');

        return promise.json();
    }).
    then(function(kakapo){

        return kakapo;

    }).
    catch(function(error){
        alert(error);
    });
}