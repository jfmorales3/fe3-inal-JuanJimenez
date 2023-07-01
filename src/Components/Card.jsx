import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import './Card.css';

const Card = ({ dentist }) => {
  
  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state;

  const isFav = state.favs.some(fav => fav.id === dentist.id);

  const toggleFav = () => {
    dispatch({ type: 'TOGGLE_FAV', payload: dentist });
  };

  return (
    <div className={`Card card shadow-sm mb-4 ${theme}`}>
      <img className="card-img-top" src='/images/doctor.jpg' alt='doctor' />
      <div className="card-body">
        <h5 className="card-title">{dentist.name}</h5>
        <p className="card-text">{dentist.email}</p>
        <Link className="btn btn-primary" to={`/dentist/${dentist.id}`}>Details</Link>
        <button className={`btn btn-${isFav ? 'danger' : 'success'} ml-2`} onClick={toggleFav}>
          {isFav ? 'Remove from favs' : 'Add to favs'}
        </button>
      </div>
    </div>
  );
};

export default Card;
