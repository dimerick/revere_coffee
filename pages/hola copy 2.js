import { gql } from "@apollo/client";
import client from "../apollo-client";
import Router from 'next/router';

export default function Hola(props) {
  console.log(props);
  return (
    <>
	<h1>Hola Web Mappers</h1>



    </>

  )
}

export async function getServerSideProps() {

  console.log("Ingresando a getServerSideProps");
  
  const { data } = await client.query({
    query: gql`
    query Countries {
      countries {
        code
        name
        emoji
      }
    }
    `,
  });

  //console.log(data);
  return {
    props: {
      data2: data,
    },
 };
}