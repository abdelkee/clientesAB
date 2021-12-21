import { useState } from "react";
import ClientForm from '../components/ClientForm';
import AddBtn from "../components/AddBtn"
import Grid from "../components/Grid"
import TopBar from "../components/TopBar"
import { clientsRoute } from "../utils/clientsRoute";

// const clientsRoute = "https://clientes-ab.vercel.app/";
// const clientsRoute = "http://localhost:3000/";

function Home({clientes}) {

  const [formVisibility, setFormVisibility] = useState(false);

  return (
    <div className="home-container">
      <TopBar name={''} amount={''}/>
      <Grid clientes={clientes}/>
      <AddBtn setFormVisibility={setFormVisibility}/>
      {formVisibility && <ClientForm setFormVisibility={setFormVisibility}/>}
    </div>
  )
}

export const getServerSideProps = async() => {

  const res = await fetch(clientsRoute + 'api/clients');
  const data = await res.json();

  return {
    props: {clientes: data}
  }
}

export default Home
