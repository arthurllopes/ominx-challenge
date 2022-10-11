import React, { useState } from 'react'
import { useCep } from '../../contexts/cepContext'
import { useNavigate } from 'react-router-dom'
import './style.css'

const CepForm = () => {
  const navigate = useNavigate()
  const {searchCep, loading, error, setError} = useCep()
  const [cepValue, setCepValue] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError('')
    e.preventDefault()
    // eslint-disable-next-line
    const cepRegex = /[0-9]{5}\-?[0-9]{3}$/
    if ((cepRegex.test(cepValue))) {
      const {success} = await searchCep(cepValue)
      if (success) {
        navigate('/deals')
      }
    } else {
      setError('Digite um CEP válido')
    }
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className='form-content'>
        <input type="text" className='cep-input' value={cepValue} onChange={(e) => setCepValue(e.target.value)} />
        <button type='submit' className={loading ? 'submit-button loading' : 'submit-button'}>{loading ? 'Carregando...': 'Enviar'}</button>
      </form>
      {error && 
        <p className='error-message'>{error}</p>
      }
    </>
  )
}

export default CepForm