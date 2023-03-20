import React from "react";

export default function PokemonList({ pokemon }) {

  return (
    <div>
      {pokemon.map(p => (
        <dev>{p}</dev>
      )
      )}
    </div>
  );
}