import * as React from 'react';
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <div style={{marginTop:'5px'}}>
        <StaticImage
          alt="Pexels"
          src="../images/pexels.jpg"        
        />
      </div>
      
    </Layout>
  );
}
export default IndexPage