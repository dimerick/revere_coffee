import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Faq/Banner';
import FaqContent from '../components/Faq/FaqContent';
import AskForm from '../components/Faq/AskForm';

import { gql } from "@apollo/client";
import client from "../apollo-client";

class Faq extends Component {

    static async getInitialProps(context) {
  
        console.log("context: "+context.query.product);
          const { data } = await client.query({
            query: gql`
            query{
              homePage{
                data{
                  attributes{
                    logo{
                      descripcion
                      imagen{
                        data{
                          attributes{
                            url
                          }
                        }
                      }
                    }
                    footer{
                      descripcion
                    }
                    contacto{
                      direccion
                      email
                      telefono
                      facebook
                      instagram
                      youtube
                    }
                    politica_privacidad{
                      titulo
                      descripcion
                    }
                  }
                }
              }
              
            }
            `,
          });          
          
          
          return {
            props: {
              data: data
            },
         };
        }

    render() {
        const data = this.props.props.data;
        console.log(data);
        return (
            <>
                <Navbar 
                logo={data.homePage.data.attributes.logo}
                contacto={data.homePage.data.attributes.contacto}
                />
                
                <Banner />

                <section className="faq-area ptb-100">
			        <div className="container">

                        <FaqContent 
                        seccion={data.homePage.data.attributes.politica_privacidad}
                        /> 

                        {/* <AskForm /> */}
                        
                    </div>
		        </section>

                <Footer 
                logo={data.homePage.data.attributes.logo}
                seccion={data.homePage.data.attributes.footer}
                contacto={data.homePage.data.attributes.contacto}
                />
            </>
        );
    }
}

export default Faq;
