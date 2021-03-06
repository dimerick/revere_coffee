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
import DetailsContent from '../components/Project/DetailsContent';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import AboutContent from '../components/About/AboutContent';

class ProductLanding extends React.Component {
    
  static async getInitialProps() {

   
    
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
              
              
              producto_cuatro_items{
                titulo
                descripcion
                nombre_boton
                items{
                  titulo
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
              
              diez_razones{
                titulo
                items{
                  titulo
                  descripcion
                  icono{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                }
              }
              
              sostenibilidad{
                titulo
                imagenFondo{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                imagen{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                items{
                  titulo
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
              
              caracteristicas_producto{
                imagen{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                items{
                  titulo
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
              
              galeria{
                titulo
                descripcion
                items{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
              
              founder{
                titulo
                descripcion
                imagen{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
              
              posts{
                titulo
                descripcion
              }
              
              productos{
                titulo
                descripcion
              }
              
              experiencias{
                titulo
                descripcion
                canal
                url_video
                imagen{
                  data{
                    attributes{
                      url
                    }
                  }
                }
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
        
        posts{
          data{
            id
            attributes{
              imagen{
                data{
                  attributes{
                    url
                  }
                }
              }
              titulo
              descripcion_corta
              fecha
              texto_enlace
              seo
            }
          }
        }
        
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
               <Banner 
               banner={data.homePage.data.attributes.banner}
               />
               <Features 
               seccion={data.homePage.data.attributes.producto_cuatro_items}
               seccion2={data.homePage.data.attributes.caracteristicas_producto}
               />
               <NewFeatures 
               seccion={data.homePage.data.attributes.sostenibilidad}
               />
               <VirtualReality 
               seccion={data.homePage.data.attributes.diez_razones}
               
               />
               <AboutContent 
               seccion={data.homePage.data.attributes.founder}
               />
               {/* <Overview />
               <WorkProcess /> */}
               <Works 
               seccion={data.homePage.data.attributes.galeria}
               />
               <LatestProducts 
               seccion={data.homePage.data.attributes.productos}
               productos={data.productos.data}
               />
               <Blog 
               seccion={data.homePage.data.attributes.posts}
               posts={data.posts.data}
               />
               <DetailsContent 
               seccion={data.homePage.data.attributes.experiencias}
               />
               {/* <Feedback />
               <Download />
               <Platform /> */}
               <Footer 
               logo={data.homePage.data.attributes.logo}
               seccion={data.homePage.data.attributes.footer}
               contacto={data.homePage.data.attributes.contacto}
               />
            </>
        );
    }
}


export default ProductLanding;
