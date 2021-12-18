import AddBtn from "../components/AddBtn"
import Grid from "../components/Grid"
import TopBar from "../components/TopBar"

const clientsRoute = "http://localhost:3000/api/clients";

function Home({clientes}) {
  return (
    <div>
      <TopBar name={''} amount={1.00}/>
      <Grid clientes={clientes}/>
      <AddBtn type={'client'}/>
    </div>
  )
}

export const getStaticProps = async() => {

  const res = await fetch(clientsRoute);
  const data = await res.json();
  return {
    props: {clientes: data}
  }
}

export default Home
