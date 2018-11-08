import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  //injetar o serviço de API da lista de pokemon
  constructor(private pokeapi: PokeapiService) { }
  //---

  //usando two way data binding pra filtrar os pokemons
  nameFilter = '';
  //---

  //pega o pokemon selecionado pelo event binding e joga na variavel
  selectedPkm = null;

  selectPokemon(pkm) {
    console.log(pkm)
    this.selectedPkm = pkm;
  }
  //---

  //get pra retornar a lista dos pokemons, se não tiver nada no search lista todos,
  //se tiver alguma coisa correspondente a algum nome só aparece ele
  //obs. o toLowerCase ignora letra maiuscula e minuscula na procura, funciona tudo
  get pokemonList() {
    return this.pokeapi.pokeList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  }
  //---

  //retorna a URL da imagem selecionada no event binding para o property binding
  get pkmSprite() {
    //formata o numero para o site pegar a imagem certa - 3 numeros no máximo, começando com 0
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }
  //---

  //Função que sempre inicia quando o componente abre
  //chama a listAllt da API
  ngOnInit() {
    this.pokeapi.listAll();
  }

}
