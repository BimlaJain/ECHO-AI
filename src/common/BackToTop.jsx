import React, { useEffect, useState } from 'react'
const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false)
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const setHendler = () => {
        setScrollToTop(window.scrollY > 100)
    }
    useEffect(() => {
        window.addEventListener("scroll", setHendler)
    },)
    return (
        <div>
            {scrollTop && (
                <button onClick={scrollHandler} className='fixed right-[10px] bottom-[10px]'><img className='size-8 animate-bounce' src="./assets/images/png/backtotop.png" alt="back to top" /></button>)
            }
        </div>
    )
}

export default BackToTop
