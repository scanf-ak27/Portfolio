import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './logo'
import './index.scss'
const Home = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray=[ ' ','A','a','y','u','s','h']
    const jobArray=['W','e','l','c','o','m','e',' ','T','o',' ','m','y',' ','p','a','g','e','.']

    // useEffect(()=> {
    //     return setTimeout(() => {
    //         setLetterClass('text-amimate-hover')
    //     }, 4000)
    // }, []) ....THIS IS WRONG WAY DONT USE useEffect like this


    //USE IT LIKE THIS
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
     
        return () => clearTimeout(timeout)
    }, [])
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span> 
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}               
                idx={14}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}               
                idx={21}/>
                </h1>
                <h2><span>Frontend Developer/ Coder</span> </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    ) ;
}
export default Home