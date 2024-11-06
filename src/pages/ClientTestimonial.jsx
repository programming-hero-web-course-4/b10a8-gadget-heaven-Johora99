
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useLoaderData } from 'react-router-dom';

import Client from '../components/Client';
import { useEffect } from 'react';

export default function ClientTestimonial() {
  const data = useLoaderData();
    useEffect(() => {
    document.title = "Client Testimonial";
  }, []);
  return (
    <AwesomeSlider
      style={{
        width: '90%',
        maxWidth: '800px',
        margin: '0 auto',
        borderRadius: '12px',
        marginTop: '60px'
      }}
    >
      {
        data.map(client => (
          <div key={client.client_id}>
            <Client client={client} />
          </div>
        ))
      }
    </AwesomeSlider>
  );
}




