import { Box, Button, List, ListItem, Icon } from '@chakra-ui/react'

import React from 'react'
import { Heading } from '@chakra-ui/react'
import { ArrowUpDownIcon, CheckCircleIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Banner = () => {
    const [baseMenuDispaly, setDisplay] = useState(false)
    const brands = [
        {
            name: 'apple'
        },
        {
            name: 'samsung'
        },
        {
            name: 'infinix'
        },
        {
            name: 'realme'
        },
        {
            name: 'audionic'
        },
        {
            name: 'lenevo'
        }
    ]
    return (
        <Box display={'flex'} flexDirection={{ lg: "row", md: "column", base: "column" }} className='main-herocl'>
            <Box w={{ lg: "25%", md: "100%", base: "100%" }} p='5' height={'auto'} maxHeight={'30rem'} shadow={'lg'} className='categories'>
                <Heading border="1px" p="2" onClick={() => setDisplay((prev) => !prev)} as={'h5'} size="md"> <ArrowUpDownIcon /> Browser Categories</Heading>
                {
                    brands.map((brand) => {
                        return (
                            <List spacing={3} display={{ base: baseMenuDispaly ? 'block' : 'none', md: 'block' }} pt="3">
                                <ListItem border={"1px"} p="2" bgColor={'gray.100'}>
                                    <a href={`#${brand.name}`}>
                                        <CheckCircleIcon color={"green.300"} boxSize={5} mx="4" />
                                        <span>
                                            {brand.name.toUpperCase()}
                                        </span>
                                    </a>
                                </ListItem>
                            </List>
                        )
                    })
                }
            </Box>
            <Box w={{ lg: "75%" }} className='banner-main'>
                <div className='home-hero'>
                    <Box
                        m="auto"
                        p="6"
                        w={{ base: '50%', md: "40%", lg: "30%" }}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        color={'gray.500'}
                        height={'100%'}>
                        <Heading as='h1' size={"xl"}>
                            New Collections
                        </Heading>
                        <Box display={'flex'}>
                            <Button border={"2px"} colorScheme='teal'>
                                Shop Now ___
                            </Button>
                        </Box>
                    </Box>
                </div>
            </Box>
        </Box>
    )
}

export default Banner