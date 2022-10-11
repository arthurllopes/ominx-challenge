import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { useNavigate } from 'react-router-dom'
import './style.css'

const DealsPage = () => {
    const navigate = useNavigate()
    const offers = [{id: 1, name: 'Oferta 1'}, {id: 2, name: 'Oferta 2'}, {id: 3, name: 'Oferta 3'}]
  return (
    <div className='page-container'>
        <Header />
        <main className='main-container'>
            <div className='main-content'>
                <div className='offers-list'>
                    {offers.map(offer => (
                        <div key={offer.id} className='offer'>
                            <p>{offer.name}</p>
                        </div>
                    ))}
                </div>
            
                <button className='go-back' onClick={() => navigate('/')}>Ops, errei meu cep!</button>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default DealsPage