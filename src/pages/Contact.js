import React from 'react'
import ContactComponent from '../components/ContactComponent'
import NavContact from '../components/NavContact'
import MapComponent from '../components/MapComponent'
// import Contact from '../components/ContactNew'
import ContactNew from '../components/ContactNew'

function ContactPage() {
  return (
    <div>
      <NavContact />
      {/* <MapComponent /> */}
       {/* <ContactComponent /> */}
        <ContactNew />
    </div>
  )
}

export default ContactPage