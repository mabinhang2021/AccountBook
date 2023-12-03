import GlobalStyles from '../GlobalStyles';
import styled from 'styled-components';
import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { Link, useLocation, useNavigate, useOutlet } from 'react-router-dom'
import {useEffect, useRef, useState} from 'react'
import logo from '../assets/images/logo.png'
import { useSwipe } from '../hooks/useSwipe';
import { useLocalStore } from '../stores/useLocalStore';
interface LinkMap {
  [key: string]: string;
}
const linkMap: LinkMap = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/home',
}
const StyledWelcomeLayout = styled.div`
  display: grid;
  grid-template-rows: 1 1fr 1;
  height: 100vh; /* Ensure the layout takes up the full height of the viewport */
  background-color:rgb(254, 219, 184);
  

  header {
    text-align: center;
    padding: 10px;
    align-items: center; 
  }
  img {
    
    padding-top:20px; /* Adjust the font size as needed */
  }

  main {
    overflow: hidden; /* Ensure main content doesn't overflow */
    padding: 20px;
    display:flex;
    justify-content:center;
    background-color:white;
    align-items: center;
  }
\

  footer {
    text-align: center;
    padding: 10px;
    display: grid; /* Use grid layout for the footer */
    grid-template-columns: 1fr 1fr; /* Two equal columns for the links */
    gap: 10px; /* Adjust the gap between the links */
    place-content: end;
  }
  .link {
    font-size: 20px; /* Adjust the font size as needed */
    /* Add other styles as needed */
  }
`;



export const WelcomeLayout: React.FC = () => {
  const animating = useRef(false)
  const map = useRef<Record<string, ReactNode>>({}) 
  const location = useLocation() 
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const [extraStyle, setExtraStyle] = useState<{ position: 'relative' | 'absolute' }>({ position: 'relative' })
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 },
    onStart: () => {
      setExtraStyle({ position: 'absolute' })
    },
    onRest: () => {
      animating.current = false
      setExtraStyle({ position: 'relative' })
    }
  })

  const main = useRef<HTMLElement>(null)
  const {direction} = useSwipe(main)
  const nav = useNavigate()
  useEffect( ()=>{
    if(direction === 'left'){
      if(animating.current){return}
      animating.current = true;
      nav(linkMap[location.pathname])
    }
  },[direction,location.pathname,linkMap])
  const { setHasReadWelcomes } = useLocalStore()
  const onSkip = () =>{
    setHasReadWelcomes(true)
  }

  return (
    <><GlobalStyles />
      <StyledWelcomeLayout>
      <header>
        <img src={logo}></img>
        
      </header>
      <main ref={main}>
        {transitions((style, pathname) => <animated.div key={pathname} style={style}>
          {map.current[pathname]}
        </animated.div>
        )}
      </main>
      <footer>
        <Link to={linkMap[location.pathname]}>下一页</Link>
        <Link to="/home" onClick={onSkip}>跳过</Link>
      </footer>
    </StyledWelcomeLayout></>
  )
}


