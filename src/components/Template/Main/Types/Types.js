import React, { useState } from 'react'
import { TypesStyled } from './TypesStyles'
import { Box, Button } from '@mui/material'

export default function Types() {
  const [ isActive, setIsActive ] = useState(0);

  const btnsData = [
    {label: 'All'},
    {label: 'Movie'},
    {label: 'Music'},
    {label: 'Live'},
    {label: 'Mixes'},
    {label: 'Trailers'},
    {label: 'JavaScript'},
    {label: 'Programming'},
    {label: 'Beauty'},
    {label: 'Telenovelas'},
    {label: 'Baking'},
    {label: 'Comedies'},
    {label: 'Cartoon'},
  ]

  return (
    <TypesStyled>
        <Box className='btnsBox'>
            {btnsData.map((item, index) => (
                <button key={item.label} className={`${isActive === index ? 'active' : ''} typeBtn`} onMouseDown={() => setIsActive(index)}>{item.label}</button>
            ))}
        </Box>
    </TypesStyled>
  )
}
