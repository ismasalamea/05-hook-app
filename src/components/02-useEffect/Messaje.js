import React, { useState,useEffect } from 'react'

export const Messaje = () => {
    
    const [coords, setCoords] = useState({x:0,y:0})
    const {x,y} = coords;

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = {x:e.x, y:e.y}
            setCoords(coords)
        }

        window.addEventListener('mousemove', mouseMove)

        console.log('componente montado')

        return () => {
            console.log('componente desmontado')
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
  return (
    <>
    <h3>Eres Genial</h3>
    <p>
        x: {x}, y: {y}
    </p>
    </>
 )
}
