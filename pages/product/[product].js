import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import BannerTwo from '../../components/Blog/BannerTwo';
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import { withRouter } from 'next/router';
import DetailsBody from '../../components/Shop/DetailsBody';



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
        //console.log(this.props.props.data);
        const data = this.props.props.data;
        console.log(this.props);
        //const data2 = this.props.props.data2;
        
        // console.log(this.props.router.query.post);
        

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

export default withRouter(Product)