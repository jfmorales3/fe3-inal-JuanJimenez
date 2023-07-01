import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
import './Home.css'

const Home = () => {
  const { state } = useContext(ContextGlobal);
  const { data, theme } = state;

  return (
    <main className={`Main container ${theme}`} >
      <h1 className="text-center py-5">Home</h1>
      <div className='card-grid'>
        {data.map(dentist => <Card key={dentist.id} dentist={dentist} />)}
      </div>
    </main>
  )
}

export default Home;
