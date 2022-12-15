import { Pokemon } from "@/core/entities/pokemon";
import { PokemonGateway } from "@/core/gateways/pokemonGateway";

export class InMemoryPokemonGateway implements PokemonGateway {
  private pokemon: Pokemon[] = [];

  public async getAllPokemon(): Promise<Pokemon[]> {
    return this.pokemon;
  }

  public async set(pokemon: Pokemon[]): Promise<Pokemon[]> {
    this.pokemon = pokemon;
    return this.pokemon;
  }

  public reset() {
    this.pokemon = [];
  }
}
