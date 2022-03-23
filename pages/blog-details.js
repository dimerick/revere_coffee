import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import BannerTwo from '../components/Blog/BannerTwo';
import DetailsContent from '../components/Blog/DetailsContent';
import client from "../apollo-client";
import { gql } from "@apollo/client";

class BlogDetails extends Component {

    static async getInitialProps() {

   
    
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
          }
          `,
        });
      
        
        return {
          props: {
            data: data,
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
                />

                <BannerTwo />

                <DetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default BlogDetails;