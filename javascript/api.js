
const container = document.getElementById('imageContainer');

fetch('https://rickandmortyapi.com/api/character')

  .then(response => response.json())
  
  .then(datos => {
    
    datos.results.forEach(element => {

      const div = document.createElement('div');
      const img = document.createElement('img');
      img.src = element.image;
      img.alt = element.name;
      img.style.width = '200px';
      const p = document.createElement('p');
      p.textContent = element.name;
      div.appendChild(img);
      div.appendChild(p);
      container.appendChild(div);

    });



  })

  .catch(err => console.log(err))