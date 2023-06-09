import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const {id} = useParams();

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
            setCharacter(data);
            } else {
            window.alert('No hay personajes con ese ID');
            }
        });
    }, [id]); //va a tener una callback y un array


    return(
        
        <div>
            {
                character.name? (   //pregunta ? positiva, : negativa
                    <>
                                <h2>{character.name}</h2>
                                <h4>{character.status}</h4>
                                <h4>{character.species}</h4>
                                <h4>{character.gender}</h4>
                                <h4>{character.origin?.name}</h4>
                                <img src={character.image} alt="img" />
                    </>
                ) : (
                    <h3>Loading...</h3>
                )
            }

        </div>
        
    )
}

export default Detail;    









/*return (
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    );*/