import React from 'react'
import CepForm from '../../components/cepForm'
import Footer from '../../components/footer'
import Header from '../../components/header'
import './style.css';

const HomePage = () => {
  return (
    <div className='page-container'>
        <Header />
        <main className='main-container'>
            <div className='form-box'>
                <h2>Seja bem vindo!</h2>
                <p>Digite seu cep para continuar</p>
                <CepForm />
            </div>
        </main>
        <Footer />
    </div>
  ) 
}

export default HomePage