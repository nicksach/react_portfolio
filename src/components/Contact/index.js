import './index.scss';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_ip15af9','template_vkuafuu',form.current,'ICls-RG6IWVIHepfq')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }
    
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    Contact me
                </h1>

                <p>
                    I am interested in... if you have any other questions, please contact me using this form.
                </p>

                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input placeholder="Name" type="text" name="name" required />
                            </li>

                            <li className='half'>
                                <input placeholder="Email" type="email" name="email" required />
                            </li>

                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>

                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>

                            <li>
                                <input type="submit" className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        
        <div className='info-map'>
            Nick Satriano,
            <br />
            Redding, CT,
            <br />
            United States
            <br />
            <span>nas022@bucknell.edu</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[41.2576, -73.4276]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[41.2576, -73.4276]}>
                    <Popup> Nick lives here </Popup>
                </Marker>
            </MapContainer>
        </div>
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Contact