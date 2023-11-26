import { faBriefcase, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from '@nextui-org/react';
import React from 'react';
import Navbar from '@/components/navbar';
import Notification from '@/components/Notification';


function notification() {
    return (
      <>
      <Navbar />
      <Notification/>
     
     
      </>
    );
  }
  
  export default notification;
  