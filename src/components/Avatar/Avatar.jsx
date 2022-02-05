import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import profile from '../../assets/faculty.jpg'
import './Avatar.css'

export default function App() {
  return (
    <MDBRow className='center-img'>
      <MDBCol lg='9' md='6' className='mb-4 center-name'>
        <img
          src={profile}
          className='img-fluid rounded-pill'
          alt=''
        />
        <p>Pankaj</p>
      </MDBCol>
      
    </MDBRow>
  );
}

