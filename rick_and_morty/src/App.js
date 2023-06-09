import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import {useState, useEffect} from "react";
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


const email = 'juan@mail.com';
const password = '123asd';

//fijarme si va con un if antes como hizo jorge
function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation()
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();


   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
         })
         .catch((error) => {
            if(error.response && error.response.status === 404){
               window.alert('¡No hay personajes con este ID!');
            }
         });
   };

   const onClose = (id) => {
      setCharacters(characters.filter((char)=>char.id !== id));
   } //filter no modifica el array original, retorna uno nuevo

   

   return (
      <div className='App'>
            {pathname !=="/" && <Nav onSearch={onSearch} />}
            <Routes>
            <Route path="/" element={<Form login={login}/>} />
            <Route 
            path="/home" 
            element={<Cards characters={characters} onClose={onClose} />} 
            />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites/>} /> 
            </Routes>
      </div>
   );
}

export default App;
