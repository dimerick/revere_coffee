import { gql } from "@apollo/client";
import client from "../apollo-client";
import Router from 'next/router';
import { Component } from "react";

export default class Hola extends Component {
  
  static async getInitialProps() {

    console.log("Ingresando a getServerSideProps");
    
    const { data } = await client.query({
      query: gql`
      query{
        homePage{
          data{
            attributes{
              createdAt
              publishedAt
              logo{
                imagen{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
      `,
    });
  
    console.log(data);
    return {
      props: {
        data: data,
      },
   };
  }

  render(){
    const data = this.props.props.data;
    const url = client.link.options.uri.replace('/graphql', '')
    console.log(client.link.options.uri);
    console.log(data)
    return (
      <>
    <h1>Hola Web Mappers</h1>
    <img src={url+data.homePage.data.attributes.logo.imagen.data.attributes.url}></img>
  
  
  
      </>
  
    )
  }
  
}


