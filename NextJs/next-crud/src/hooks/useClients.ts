import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableOrForm from "./useTableOrForm"

export default function useClients() {
    const repo: ClientRepository = new ClientCollection()

    const { 
        displayForm,
        displayTable,
        showForm,
        showTable
    } = useTableOrForm()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  useEffect(getAll, [])
  
  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      showTable()
    })
    
  }

  function selectClient(client: Client) {
    setClient(client)
    showForm()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
    showTable()
  }

  function newClient() {
    setClient(Client.empty())
    showForm()
  }

  return {
      saveClient,
      deleteClient,
      newClient,
      selectClient,
      getAll,
      client,
      clients,
      displayTable,
      showTable
  }
}