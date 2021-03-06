import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/ContactUs/Banner';
import Content from '../components/ContactUs/Content';
import Form from '../components/ContactUs/Form';

import client from "../apollo-client";
import { gql } from "@apollo/client";

class Contact extends Component {

    static async getInitialProps(context) {
  
        console.log("context: "+context.query.post);
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
                      numero_whatsapp
                      mensaje_whatsapp
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
        return (
            <>
                <Navbar 
                logo={data.homePage.data.attributes.logo}
                contacto={data.homePage.data.attributes.contacto}
                />

                <Banner />

                <Content 
                contacto={data.homePage.data.attributes.contacto}
                />

                {/* <Form /> */}
                
                <Footer 
                logo={data.homePage.data.attributes.logo}
                seccion={data.homePage.data.attributes.footer}
                contacto={data.homePage.data.attributes.contacto}
                />
            </>
        );
    }
}

export default Contact;
