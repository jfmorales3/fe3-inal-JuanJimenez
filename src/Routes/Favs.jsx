import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context'

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const favsFromLocalStorage = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(favsFromLocalStorage);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${theme}`}>
        {favs.map(dentist => <Card key={dentist.id} dentist={dentist} />)}
      </div>
    </>
  );
};

export default Favs;
