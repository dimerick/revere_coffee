import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import BannerTwo from '../../components/Blog/BannerTwo';
import DetailsContent from '../../components/Blog/DetailsContent';
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import { withRouter } from 'next/router';



class Post extends Component{
  
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
                }
              }
            }
            posts(filters:{seo:{eq:"${context.query.post}"}}){
              data{
                attributes{
                  titulo
                  cuerpo
                  fecha
                  descripcion_corta
                  createdAt
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
          `,
        });
      
        
        return {
          props: {
            data: data,
          },
       };
      }

    render() {
        //console.log(this.props.props.data);
        const data = this.props.props.data;
        console.log(data.posts);
        // console.log(this.props.router.query.post);
        

        return (
            <>
                <Navbar 
                
                logo={data.homePage.data.attributes.logo}
                />

                

                <BannerTwo />

                <DetailsContent 
                post={data.posts.data[0]}
                />
                
                <Footer />
            </>
        );
    }
}

export default withRouter(Post)