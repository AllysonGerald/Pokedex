const listaSelecaoPokemons =  document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.cartao-pokemon.aberto');
        cartaoPokemonAberto.classList.remove('aberto');

        const idPkemonSelecionado = pokemon.attributes.id.value;
        const idCartaoPokemonParaAbrir = 'cartao-' + idPkemonSelecionado;
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir);
        cartaoPokemonParaAbrir.classList.add('aberto');

        const PokemonAtivoNaListagem = document.querySelector('.pokemon.ativo');
        PokemonAtivoNaListagem.classList.remove('ativo');

        const pokemonSelecionadoNaListagem = document.getElementById(idPkemonSelecionado);
        pokemonSelecionadoNaListagem.classList.add('ativo');
    });
});
