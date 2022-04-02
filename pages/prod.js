import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import BannerTwo from '../components/Shop/BannerTwo';
import DetailsBody from '../components/Shop/DetailsBody';

import client from "../apollo-client";
import { gql } from "@apollo/client";
import { withRouter } from 'next/router';


class ShopOne extends Component {

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
        const data = this.props.props.data;
        const data2 = this.props.props.data2;
        return (
            <>
                <Navbar 
                logo={data.homePage.data.attributes.logo}
                />

                <BannerTwo />

                <DetailsBody />
                
                <Footer />
            </>
        );
    }
}

export default ShopOne;