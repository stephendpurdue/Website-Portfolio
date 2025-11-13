import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_4sqxw5b',
                refForm.current,
                'Cd4kpWKvJeW0WGKmB'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again.')
                }
            )
    }
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '.']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        If you have any opportunities, or quesitons, please don't hesitate to reach out using the
                        link below.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubimt={sendEmail}>
                            <ul>
                            <li className="half">
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className="half">
                                <input type='text' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND" />
                            </li>
                            </ul>
                        </form>

                    </div>
                </div>
            </div>
            
            <Loader type="pacman" />
        </>
    )
}

export default Contact