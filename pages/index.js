import AddBtn from "../components/AddBtn"
import Grid from "../components/Grid"
import TopBar from "../components/TopBar"

export const clientsRoute = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : `https://${process.env.VERCEL_URL}`;


function Home() {
  return (
    <div>
      <TopBar name={''} amount={1.00}/>
      {/* <Grid clientes={clientes}/> */}
      <AddBtn type={'client'}/>
    </div>
  )
}

// export const getStaticProps = async() => {

//   const res = await fetch(clientsRoute + '/api/clients');
//   const data = await res.json();

//   return {
//     props: {clientes: data}
//   }
// }

export default Home
