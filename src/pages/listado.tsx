import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import ListGroup from "react-bootstrap/ListGroup";
import { getPokemon } from "../controller/getController";
import { Pokemon } from "../models/pokemon.models";
import { useEffect, useState } from "react";

export const Listado = () => {
  const [pokemons, setpokemons] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const ObtenerTodos = async () => {
      const allPokemons = await getPokemon();
      setpokemons(allPokemons);
    };
    ObtenerTodos();
  });
  //* Metodo para Buscar
  const filtrarpokemon = pokemons?.slice(0, 100).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <>
      {/* https://unpkg.com/pokemons@1.1.0/pokemons.json */}
      <h1>Pokemon</h1>
      <header>
        <input
          value={query}
          placeholder="Buscar Pokemon"
          onChange={(event) => setQuery(event.target.value.trim())}
          type="text"
        />
      </header>
      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3 ">
            {filtrarpokemon?.slice(0, 100).map((pokemon) => (
              <Card className="mx-auto" style={{ width: "18rem" }}>
                <Card.Header>Tipo:{pokemon.type}</Card.Header>
                <Card.Img
                  className="d-block mx-auto w-50"
                  width="80"
                  height="100"
                  variant="flush"
                  src={pokemon.imggif}
                />
                <Card.Body>
                  <Card.Title>
                    {pokemon.id}-{pokemon.name}
                  </Card.Title>
                  <ListGroup>
                    <ListGroup.Item>
                      {" "}
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn0.iconfinder.com/data/icons/tidee-health/24/015_005_heart_health_good_healthy-512.png"
                      />
                      HP:{pokemon.hp}{" "}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn3.iconfinder.com/data/icons/wargame-moves-and-tactic/100/OffensiveMove-512.png"
                      />{" "}
                      Ataque:{pokemon.attack}
                    </ListGroup.Item>
                    <ListGroup.Item>Defensa:{pokemon.defense}</ListGroup.Item>
                    <ListGroup.Item>E.Ataque {pokemon.sp_atk} </ListGroup.Item>
                    <ListGroup.Item>E.Defensa {pokemon.sp_def}</ListGroup.Item>
                    <ListGroup.Item>Velocidad {pokemon.speed}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
