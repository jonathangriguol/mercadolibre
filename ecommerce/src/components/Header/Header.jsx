import { Form, useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import "./Header.scss"; // Importa el archivo SCSS para aplicar estilos
import { useState } from "react";

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    navigate(`items?search=${searchInput}`); // Redirige a la ruta '/items' con el parámetro de búsqueda
  };
  
  return (
    <header className="Header">
      <div className="HeaderContent">
        <div className="Logo">
          {/* Aquí puedes insertar tu logotipo */}
          <img src="logo.png" alt="Logotipo" height={30} />
        </div>
        <div className="SearchBox">
          <Form id="search-form" role="search" className="Form">
            <input
              id="search"
              className="SearchInput"
              aria-label="Buscar"
              placeholder="Nunca dejes de buscar"
              type="search"
              name="search"
              defaultValue={''}
              onChange={handleSearchInputChange} 
            />
            <div className="sr-only" aria-live="polite"></div>

            <button className="SearchButton" onClick={handleSearchButtonClick}></button>
          </Form>
        </div>
      </div>
    </header>
  );
};

export default Header;
