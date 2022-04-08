import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import useClients from "../hooks/useClients"

export default function Home() {

  const { 
    client, 
    clients, 
    newClient, 
    selectClient, 
    deleteClient,
    saveClient ,
    displayTable,
    showTable
  } = useClients()


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-400 to-purple-400
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {displayTable ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4"
                onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table clients={clients} clientSelected={selectClient} clientExcluded={deleteClient}></Table>
          </>
        ) : (
          <Form client={client} cancel={showTable} change={saveClient}/>
        )}
      </Layout>
    </div>
  )
}
