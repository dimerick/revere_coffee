import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import BannerTwo from '../../components/Shop/BannerTwo';
import DetailsBody from '../../components/Shop/DetailsBody';

import client from "../../apollo-client";
import { gql } from "@apollo/client";
import { withRouter } from 'next/router';




class Product extends Component{
  
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
                    numero_whatsapp
                    mensaje_whatsapp
                  }
                }
              }
            }
            productos(filters:{seo:{eq:"${context.query.product}"}}){
              data{
                attributes{
                  nombre
                  descripcion
                  precio
                  seo
                  imagenes{
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
          `,
        });

        const data2 = await client.query({
          query: gql`
          query{
            productos{
              data{
                attributes{
                  nombre
                  descripcion
                  precio
                  seo
                  imagenes{
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
          `,
        });
        
        
        
        return {
          props: {
            data: data,
            data2: data2
          },
       };
      }

    render() {
        //console.log(this.props.props.data);
        const data = this.props.props.data;
        console.log(this.props);
        const data2 = this.props.props.data2;
        
        // console.log(this.props.router.query.post);
        

        return (
            <>

                <Navbar 
                logo={data.homePage.data.attributes.logo}
                contacto={data.homePage.data.attributes.contacto}
                />

                <BannerTwo />

                <DetailsBody 
                producto={data.productos.data[0]}
                recent_products={data2.data.productos.data}
                />
                
                <Footer 
                logo={data.homePage.data.attributes.logo}
                seccion={data.homePage.data.attributes.footer}
                contacto={data.homePage.data.attributes.contacto}
                />
            </>
        );
    }
}

export default withRouter(Product)