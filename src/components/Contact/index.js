import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

export const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refform = useRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
}, [])

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_uv5j86b', 'template_8dcsrag', refform.current, 'y3uo1oSE8XB5g2G6L')
    .then((result) => {
        console.log("Succesfully sent!!!");
        e.target.reset();
    }, (error) => {
        console.log("Message not sent!!!");
    });
};

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refform} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Aayush Kumar
          <br />
          Sanjay Path, Dimna Road
          <br />
          Mango Jamshedpur 831012 <br />
          Jharkhand <br />
          <br />
          <span>kraayush27@gmail.com</span>
        </div>
        <div className="map-wrap">
        const position = [51.505, -0.09]
        
        render(
          <MapContainer center={[22.823650745729807, 86.22472002444361]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[22.823650745729807, 86.22472002444361]}>
    <Popup>
      Aayush's Home <br />
    </Popup>
  </Marker>
</MapContainer>
        )
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact