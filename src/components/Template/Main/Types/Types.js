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
    {label: 'Computer Science'},
    {label: 'Beauty'},
    {label: 'Telenovelas'},
    {label: 'Baking'},
    {label: 'Comedies'},
    {label: 'Pop Music'},
  ]

  return (
    <TypesStyled>
        <Box className='btnsBox'>
            {btnsData.map((item, index) => (
                <Button className={isActive === index ? 'active' : ''} onMouseDown={() => setIsActive(index)}>{item.label}</Button>
            ))}
        </Box>
    </TypesStyled>
  )
}
