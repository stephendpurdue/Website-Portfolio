import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])
    
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
                        <form>
                            <li className="half">
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className="half">
                                <input type='text' name='email' placeholder='Name' required />
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
                        </form>

                    </div>
                </div>
            </div>
            
            <Loader type="pacman" />
        </>
    )
}

export default Contact