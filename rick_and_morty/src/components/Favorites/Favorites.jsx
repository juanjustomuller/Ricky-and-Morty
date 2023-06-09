import Card from '../Card/Card';
import { connect } from 'react-redux';


const Favorites = ({ myFavorites }) => {
    return (
        <div>
        {myFavorites?.map(fav => {
            return (
                <Card
                key = {fav.id}
                id = {fav.id}
                name = {fav.name}
                status = {fav.status}
                species = {fav.species}
                gender = {fav.gender}
                img = {fav.image}
                />
            )
        })}
        </div>
    )
}  

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps, 
    null
)(Favorites);