import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

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
    </div>
    )
}

export default About