import React from 'react'
import { useCep } from '../../contexts/cepContext'

const Header = () => {
    const {cep} = useCep()
  return (
    <header style={{backgroundColor: '#ddd', height: '80px', width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '8px'}}>
        {cep && 
            <div style={{color: '#000'}}>
                <p>Seu endereço de entrega é: {cep?.logradouro}, {cep?.bairro}, {cep.localidade} - {cep?.uf} - {cep?.cep}</p>
            </div>
        }
    </header>
  )
}

export default Header