import AddBtn from "../components/AddBtn"
import Grid from "../components/Grid"
import TopBar from "../components/TopBar"

export const clientsRoute = process.env.NODE_ENV === "development" ? process.env.SERVER_URI : `https://${process.env.VERCEL_URL}`;

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

  const res = await fetch(clientsRoute + '/api/clients');
  const data = await res.json();

  return {
    props: {clientes: data}
  }
}

export default Home
