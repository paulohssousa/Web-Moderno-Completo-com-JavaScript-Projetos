import { useState } from "react";

export default function useTableOrForm() {
    const [display, setDisplay] = useState<'table' | 'form'>('table')

    const showTable = () => setDisplay('table')
    const showForm = () => setDisplay('form')

    return {
        displayForm: display === 'form',
        displayTable: display === 'table',
        showForm,
        showTable
    }
}