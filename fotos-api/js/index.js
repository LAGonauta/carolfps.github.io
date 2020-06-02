let divFotos = document.getElementById('fotos');

async function pegarFotos(){

    let fotos = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=7189f21f89748e26ea24e06206872cc8&per_page=6&format=json&nojsoncallback=1');

    let fotosJson = await fotos.json();
    
    for( let fotoId of fotosJson.photos.photo.map( p => p.id)){
        
        let endFoto = await fetch ('https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=7189f21f89748e26ea24e06206872cc8&photo_id=' + fotoId + '&format=json&nojsoncallback=1');
        
        let endFotoJson = await endFoto.json();

        let srcFotoPeq = endFotoJson.sizes.size[5];

        console.log(srcFotoPeq);
    }

}

pegarFotos();