import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import './Detail.css';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const { data, theme } = state;
  const dentist = data.find(dentist => dentist.id === Number(id));

  if (!dentist) {
    return <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>;
  }

  return (
    <div className={`Detail ${theme} d-flex justify-content-center align-items-center vh-100`}>
      <div className="card text-center" style={{ width: '18rem' }}>
        <img src='/images/doctor.jpg' className="card-img-top" alt="Dentist" />
        <div className="card-body">
          <h5 className="card-title">{dentist.name}</h5>
          <p className="card-text">{dentist.email}</p>
          <p className="card-text">{dentist.phone}</p>
          <p className="card-text">{dentist.website}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
