import AddBtn from "../components/AddBtn"
import Grid from "../components/Grid"
import TopBar from "../components/TopBar"

const clientsRoute = "/api/clients";

function Home({clientes}) {
  return (
    <div>
      <TopBar name={''} amount={1.00}/>
      <Grid clientes={clientes}/>
      <AddBtn type={'client'}/>
    </div>
  )
}

export const getServerSideProps = async() => {

  const res = await fetch(clientsRoute);
  const data = await res.json();

  if(!data) {
    return { notFound: true }
  }
  return {
    props: {clientes: data}
  }
}

export default Home
