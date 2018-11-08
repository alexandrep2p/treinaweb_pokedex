import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//interface pra poder tipar a reposta da requisição ()
interface PokeListResponse {
  created: string,
  modified: string,
  name: string,
  pokemon: any[],
  resource_uri: string
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  //url do serviço que vou consumir os dados
  private url = '//dev.treinaweb.com.br/pokeapi/';

  //lista dos pokemons para o list.components.ts
  pokeList = [];

  //injeção de dependencia do htttpcliente
  constructor(private http: HttpClient) { }

  //requisição da lista
  listAll() {
    this.http.get<PokeListResponse>(`${this.url}/pokedex/1`)
      .subscribe(
        response => {
          console.log(response);
          response.pokemon.forEach(pokemon => {
            //numero dos pokemons
            pokemon.number = this.getNunmberFromUrl(pokemon.resource_uri);
          })
          //ordenar pokemons
          this.pokeList = this.sortPokemon(response.pokemon)
            .filter(pokemon => pokemon.number < 1000)
        }
      )
  }

  //pegar só o numero do pokemon da URL através de expressão regular
  private getNunmberFromUrl(url) {
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
  }

  //ordenar pokemons por numero
  private sortPokemon(pokemonList) {
    return pokemonList.sort((a, b) => {
      return (a.number > b.number ? 1 : -1);
    })
  }

}


