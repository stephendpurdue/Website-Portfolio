import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faGitAlt, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
}, [])
    
return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e','.']}
                    idx={15}
                />
            </h1>
            <p>
                I've been working as a Game Development student for the alst 3 years working on C# programming, 
                and I'm hoping to pivot into Artificial Intelligence once I graduate.
            </p>
            <p>
                While my core skill set is in Python, I have found a love in Full-Stack Development, particularly JavaScript and React.
                Learning new technologies is always an exciting and challenging experience and I love building things with them.
            </p>
            <p>
                I also do a great deal of Snowboarding, which is one of my favourite hobbies.
            </p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faPython} color="#ffde57" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faJava} color="#ED8B00" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>

            </div>
        </div>
    </div>
    )
}

export default About