
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useLoaderData } from 'react-router-dom';

import Client from '../components/Client';
import { useEffect, useState } from 'react';

export default function ClientTestimonial() {
  const[clients,setClients] = useState([])
  const data = useLoaderData();
   useEffect(()=>{
    setClients(data)
   },[data])
  console.log(data)
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
    Array.isArray(data) && clients.length > 0 ? (
    clients.map(client => (
      <div>
        <Client client={client} />
      </div>
    ))
  ) : (
    <p>No clients available</p> 
  )
}

    </AwesomeSlider>
  );
}




