import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <div className={`contact-container ${theme} mt-5 text-center`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <div style={{ marginBottom: '2rem' }}></div>
      <Form/>
    </div>
  )
}

export default Contact;
