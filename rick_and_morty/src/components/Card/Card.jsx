import style from "./Card.module.css"
import { Link } from "react-router-dom";
import {addFav, removeFav} from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";


function Card({id, name, status, species, gender, image, onClose, addFav, removeFav, myFavorites }) {


      const [isFav, setIsFav] = useState(false);

      const handleFavorite = () => {
            if(isFav){
                  setIsFav(false);
                  removeFav(id);
            } else {
                  setIsFav(true);
                  addFav({id, name, status, species, gender, image})
            }
      }

      useEffect(() => {
            if (myFavorites) {
            myFavorites.forEach((fav) => {
            if (fav.id === id) {
                  setIsFav(true);
            }
            });
            }
      }, [myFavorites, id]);


      /*useEffect(() => {
            myFavorites.forEach((fav) => {
            if (fav.id === id) {
                  setIsFav(true);
            }
            });
      }, [myFavorites]);*/


      return (
            
            <div className={style.cardContainer}>

      
            <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
            

                  <div className={style.cardImagen}>
                  <img src={image} alt={name} />
                  <button onClick={()=>onClose(id)}>X</button>
                  </div>
                  <div className={style.description}>

                  <Link to={`/detail/${id}`}><h2>{name}</h2></Link>     
                  
                  <h3>Status: {status}</h3>
                  <h3>Species: {species}</h3>
                  <h3>Gender: {gender}</h3>
                  
                  </div>
            </div>
      );
}

const mapStateToProps = (state) => {
      return {
            myFavorites: state.myFavorites
      }
}

const mapDispatchToProps = (dispatch) => {
      return {
            addFav: (character) => {dispatch(addFav(character))},
            removeFav: (id) => {dispatch(removeFav(id))}
      }
}


export default connect(
      mapStateToProps,
      mapDispatchToProps
)(Card);