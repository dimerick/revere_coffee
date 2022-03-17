import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/ProductLanding/Banner';
import Features from '../components/ProductLanding/Features';
import NewFeatures from '../components/ProductLanding/NewFeatures';
import VirtualReality from '../components/ProductLanding/VirtualReality';
import Overview from '../components/ProductLanding/Overview';
import WorkProcess from '../components/ProductLanding/WorkProcess';
import Works from '../components/ProductLanding/Works';
import LatestProducts from '../components/ProductLanding/LatestProducts';
import Blog from '../components/ProductLanding/Blog';
import Feedback from '../components/ProductLanding/Feedback';
import Download from '../components/ProductLanding/Download';
import Platform from '../components/ProductLanding/Platform';
import { gql } from "@apollo/client";
import client from "../apollo-client";

class ProductLanding extends React.Component {
    
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
              banner{
                titulo
                descripcion
                texto_boton
                url_video
                imagen{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
              seccion_diez_razones{
                titulo
                descripcion
              }
            }
          }
        
        }
        razonElegirnos{
          data{
            id
            attributes{
              icono{
                data{
                  attributes{
                    url
                  }
                }
              }
              titulo
              descripcion
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

    render() {
      const data = this.props.props.data;
      const url = client.link.options.uri.replace('/graphql', '')
      console.log(data)
        
        return (
            <>
               <Navbar 
               logo={data.homePage.data.attributes.logo}
               
               />
               <Banner 
               banner={data.homePage.data.attributes.banner}
               />
               <Features />
               <NewFeatures />
               <VirtualReality 
               seccion={data.homePage.data.attributes.seccion_diez_razones}
               razones={data.razonElegirnos.data}
               />
               <Overview />
               <WorkProcess />
               <Works />
               <LatestProducts />
               <Blog />
               <Feedback />
               <Download />
               <Platform />
               <Footer />
            </>
        );
    }
}


export default ProductLanding;
