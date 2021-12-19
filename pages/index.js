import AddBtn from "../components/AddBtn"
import Form from "../components/ClientForm";
import Grid from "../components/Grid"
import TopBar from "../components/TopBar"

export const clientsRoute = "https://clientes-ab.vercel.app/";
// export const clientsRoute = "http://localhost:3000/";

function Home({clientes}) {
  return (
    <div>
      <TopBar name={''} amount={1.00}/>
      <Grid clientes={clientes}/>
      <AddBtn/>
    </div>
  )
}

export const getStaticProps = async() => {

  const res = await fetch(clientsRoute + 'api/clients');
  const data = await res.json();

  return {
    props: {clientes: data}
  }
}

export default Home
