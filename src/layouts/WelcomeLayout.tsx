import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { Link, useLocation, useOutlet } from 'react-router-dom'
import {useRef} from 'react'
import logo from '../assets/images/logo.png'
interface LinkMap {
  [key: string]: string;
}
const linkMap: LinkMap = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/xxx',
}

export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({}) 
  const location = useLocation() // 获取当前地址栏的信息
  // location.pathname === /welcome/1
  // location.pathname === /welcome/2
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    // 进入状态
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    // 稳定状态
    enter: { transform: 'translateX(0%)' },
    // 退出状态
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 1000 }
  })
  return (
    <div>
      <header>
        <img src={logo}></img>
        <h1>随手记</h1>
        </header>
      <main>
        {transitions((style,pathname)=>
          <animated.div key ={pathname} style ={style}>
            {map.current[pathname]}
          </animated.div>
        )}
      </main>
        <footer>
        <Link to={linkMap[location.pathname]}>下一页</Link>
          <Link to ="/welcome/xxx">跳过</Link>
        </footer>
    </div>
  )
}


