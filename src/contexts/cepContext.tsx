import { createContext, ReactNode, useContext, useState } from "react";

type CepContextProviderProps = {
    children: ReactNode
}

type CepContextType = {
    setError: (cb: string) => void
    error: string,
    loading: boolean,
    cep: Cep | null,
    searchCep: (cb: string) => Promise<{ success: boolean; }>,
}

export type Cep = {
    bairro: string,
    complemento: string,
    ddd: string,
    gia: string,
    ibge: string,
    cep: string,
    localidade: string,
    logradouro: string,
    siafi: string,
    uf: string,
}

export const CepContext = createContext({} as CepContextType)

export const CepContextProvider = ({children}: CepContextProviderProps) => {
    const [error, setError] = useState(''),
    [loading, setLoading] = useState(false),
    [cep, setCep] = useState<Cep | null>(null)

    const searchCep = async (cep: string) => {
        setError('')
        setLoading(true)
        try {
            const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            //if (status !== 200) throw new Error()
            setCep(res)
            return {
                success: true
            }
        } catch (error) {
            setError('Desculpe, não foi possível buscar seu cep. Tente novamente mais tarde')
            return {
                success: false
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <CepContext.Provider value={{setError, error, loading, cep, searchCep}}>
            {children}
        </CepContext.Provider>
    )
}
//para não precisa fazer duas importaçoes onde for usar o contexto
//funciona como um hook
export const useCep = () => {
    const context = useContext(CepContext)
    return context
}