import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import {useRef} from 'react'
export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({}) 
  const location = useLocation() // 获取当前地址栏的信息
  // location.pathname === /welcome/1
  // location.pathname === /welcome/2
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    // 进入状态
    from: { transform: 'translateX(100%)' },
    // 稳定状态
    enter: { transform: 'translateX(0%)' },
    // 退出状态
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 1000 }
  })
  return transitions((style, pathname) => 
     <animated.div key={pathname} style={style}>
      <div style={{ textAlign: 'center' }}>
        {map.current[pathname]}
      </div>
    </animated.div>
  )
}


