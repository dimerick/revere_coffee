import { gql } from "@apollo/client";
import client from "../apollo-client";
import Router from 'next/router';
import { Component } from "react";

export default class Hola extends Component {
  
  static async getInitialProps() {

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
  
    console.log(data);
    return {
      props: {
        data2: data,
      },
   };
  }

  render(){
    console.log(this.props.props.data2)
    return (
      <>
    <h1>Hola Web Mappers</h1>
  
  
  
      </>
  
    )
  }
  
}


