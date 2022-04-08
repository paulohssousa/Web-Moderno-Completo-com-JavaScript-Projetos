import { useState } from 'react'
import Input from './Input'
import Client from '../core/Client'
import Button from './Button'

interface FormProps {
    client: Client
    change?: (client: Client) => void
    cancel?: () => void
}

export default function Form(props: FormProps) {
    const id = props.client.id ?? null
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    return (
        <div>
            {id ? (
                <Input 
                    readOnly 
                    text="Código" 
                    value={id}
                    className="mb-5"
                />
            ) : false}
            
            <Input 
                text="Nome" 
                value={name} 
                change={setName}
                className="mb-5"
            />
            
            <Input 
                text="Idade" 
                type="number" 
                value={age} 
                change={setAge}
            />

            <div className='flex justify-end mt-3'>
                <Button color='blue' className='mr-2' 
                    onClick={() => props.change?.(new Client(name, +age, id))}> 
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancel}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}