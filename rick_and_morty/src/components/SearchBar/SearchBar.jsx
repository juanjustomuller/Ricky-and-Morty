import style from "../SearchBar/SearchBar.module.css"
import { useState } from "react";


export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");
   
   const handleChange = (event) => {
      setId(event.target.value)
   }


   return (
         <div className={style.searchBarContainer}>
            <div className={style.searchInputContainer}>
            <input 
            className={style.searchInput} 
            type='search'
            onChange = {handleChange}
            />
            <button 
            className={style.searchButton} 
            onClick={()=> onSearch(id)}>
               Agregar
            </button>
            </div>
         </div>
   );
}
