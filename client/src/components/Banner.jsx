import { Box, Button, List, ListItem, Icon } from '@chakra-ui/react'

import React from 'react'
import { Heading } from '@chakra-ui/react'
import { ArrowUpDownIcon, CheckCircleIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Banner = () => {
    const [baseMenuDispaly, setDisplay] = useState(false)
    return (
        <Box display={'flex'} className='main-herocl'>
            <Box w="25%" p='5' height={'auto'} maxHeight={'30rem'} shadow={'lg'} className='categories'>
                <Heading border="1px" p="2" onClick={() => setDisplay((prev) => !prev)} as={'h5'} size="md"> <ArrowUpDownIcon /> Browser Categories</Heading>
                <List spacing={3} display={{ base: baseMenuDispaly ? 'block' : 'none', md: 'block' }} pt="3">
                    <ListItem border={"1px"} borderBottom={"0"} p="2" bgColor={'gray.100'}>
                        <Link to="/hello">
                            <CheckCircleIcon color={"green.300"} boxSize={5} mx="4" />
                            <span>
                                iPhone / Apple
                            </span>
                        </Link>
                    </ListItem>
                </List>
                <List spacing={3} display={{ base: baseMenuDispaly ? 'block' : 'none', md: 'block' }}>
                    <ListItem border={"1px"} borderBottom={"0"} p="2" bgColor={'gray.100'}>
                        <Link to="/hello">
                            <CheckCircleIcon color={"green.300"} boxSize={5} mx="4" />
                            <span>
                                Samsung
                            </span>
                        </Link>
                    </ListItem>
                </List>
                <List spacing={3} display={{ base: baseMenuDispaly ? 'block' : 'none', md: 'block' }}>
                    <ListItem border={"1px"} borderBottom={"0"} p="2" bgColor={'gray.100'}>
                        <Link to="/hello">
                            <CheckCircleIcon color={"green.300"} boxSize={5} mx="4" />
                            <span>
                                Ininix
                            </span>
                        </Link>
                    </ListItem>
                </List>
                <List spacing={3} display={{ base: baseMenuDispaly ? 'block' : 'none', md: 'block' }}>
                    <ListItem border={"1px"} borderBottom={"0"} p="2" bgColor={'gray.100'}>
                        <Link to="/hello">
                            <CheckCircleIcon color={"green.300"} boxSize={5} mx="4" />
                            <span>
                                Realme
                            </span>
                        </Link>
                    </ListItem>
                </List>
                <List spacing={3} display={{ base: baseMenuDispaly ? 'block' : 'none', md: 'block' }}>
                    <ListItem border={"1px"} p="2" bgColor={'gray.100'}>
                        <Link to="/hello">
                            <CheckCircleIcon color={"green.300"} boxSize={5} mx="4" />
                            <span>
                                Audionic
                            </span>
                        </Link>
                    </ListItem>
                </List>
            </Box>
            <Box w="75%" className='banner-main'>
                <div className='home-hero'>
                    <Box
                        m="auto"
                        p="6"
                        w={{ base: '30%' }}
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