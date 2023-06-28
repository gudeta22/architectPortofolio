import React from 'react'
import NavContact from '../components/NavContact'
import MapComponent from '../components/MapComponent'
import ContactNew from '../components/ContactNew'

function ContactPage() {
 
  return (
    <div>
        <NavContact />
        <ContactNew />
        <MapComponent />
    </div>
  )
}

export default ContactPage