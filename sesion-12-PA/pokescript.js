async function busquedaPokemon() {
    const pokemonId = document.getElementById("pokemonId").value.trim();
    
    if (!pokemonId) {
      alert("ingresa un id de pokemon valida");
      return;
    }
  
    axios.get(`https://pokeapi.co/${pokemonId}`)
    .then(response => {
        const pokemon = response.data;
        displayPokemonInfo(pokemon);

    })

    function displayPokemonInfo(pokemon){
        const pokemonInfo = document.getElementById("pokemonInfo");

        //nombre de pokemon
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = "nombre: "+ pokemon.name;
        pokemonInfo.appendChild(nameHeading);

        //id de pokemon
        const idHeading = document.createElement("h2");
        idHeading.textContent = "id: " + pokemon.id;
        pokemonInfo.appendChild(idHeading);

        //altura del pokemon
        const heightParagraph = document.createElement("p");
        heightParagraph.textContent = "altura: "+ (pokemon.height/10)+ " m";
        pokemonInfo.appendChild(heightParagraph);

        //peso del pokemon
        const weightParagraph = document.createElement("p");
        weightParagraph.textContent = "peso: "+ (pokemon.weight/10)+ " kg";
        pokemonInfo.appendChild(weightParagraph);

        //de que tipo es el pokemon
        const typesParagraph = document.createElement("p");
        typesParagraph.textContent = "Tipos: "+ (pokemon.types);
        pokemonInfo.appendChild(typesParagraph);
        
    }

}

