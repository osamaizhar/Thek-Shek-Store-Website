import React, { useState } from 'react'
import { Badge, Box, Button, Divider, HStack, Heading, Image, Select, Stack, Text, VStack } from '@chakra-ui/react'
import Fnf from '../Assets/Images/new-arrival/fnf.webp'
import Fnf2 from '../Assets/Images/new-arrival/fnf2.webp'
import Fnf3 from '../Assets/Images/new-arrival/fnf3.webp'
import tmb1 from '../Assets/Images/new-arrival/thmb.avif'
import tmb2 from '../Assets/Images/new-arrival/thmb1.avif'
import tmb3 from '../Assets/Images/new-arrival/thmb2.avif'
import { Link } from 'react-router-dom'
const DiscountSection = () => {
    const dummybackend = [
        {
            thumbnail: tmb1,
            main: Fnf,
            isActive: true
        },
        {
            thumbnail: tmb2,
            main: Fnf2,
            isActive: false
        },
        {
            thumbnail: tmb3,
            main: Fnf3,
            isActive: false
        },
    ]
    const [items, setItem] = useState({ all: dummybackend, active: dummybackend.find((val) => val.isActive) })
    const updateThumnail = (id) => {
        setItem((prev) => {
            return {
                ...prev,
                active: prev.all[id]
            }
        })
    }
    return (
        <>
            <Heading fontSize='4xl' py="20px">
                Hot Selling Item 🔥
            </Heading>
            <Box display={"flex"} flexDirection={{ lg: "row", md: "column", base: "column" }}>
                <Box p={5} shadow='md' borderWidth='1px' w={{ lg: "50%", md: "100%", sm: "100%" }}>
                    <Box display={"flex"} flexDirection={{ lg: "row", md: "row", base: "column" }}>
                        <Box mx={{base:"auto"}} display={"flex"} flexDirection={{ lg: "column", md: "column", base: "row" }}  gap={"5px"}>

                            {
                                React.Children.toArray(
                                    items.all.map((item, id) => {
                                        return (
                                            <Image
                                                p="10px"
                                                my="10px"
                                                border={'2px'}
                                                height={"100px"}
                                                width={"100px"}
                                                src={item.thumbnail}
                                                onClick={() => updateThumnail(id)}
                                            />
                                        )
                                    })
                                )
                            }
                        </Box>
                        <Box w="90%">
                            <Image src={items.active.main} w="100%" objectFit='contain' h={"80%"} />
                        </Box>
                    </Box>
                </Box>
                <Box w={{ lg: "50%", md: "100%", sm: "100%" }}>
                    <VStack align='stretch' spacing={'2'} py="20px" px="15px">
                        <Heading as={Link} to="/" fontSize='5xl' color={"teal.400"}>
                            Gaming Earphones
                        </Heading>
                        <span>
                            <Badge colorScheme='green'>10% off</Badge>
                        </span>
                        <Divider py="20px" />
                        <HStack>
                            <Text>
                                Price
                            </Text>
                            <Text>
                                2,000
                            </Text>
                        </HStack>
                        <Select py="20px" placeholder='Select Qantity'  borderRadius='0'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                        </Select>
                        <HStack>
                            <Button colorScheme='whatsapp' borderRadius='0' w="50%">Add To Cart</Button>
                            <Button colorScheme='twitter' borderRadius='0' w="50%">Buy Now</Button>
                        </HStack>
                    </VStack>
                </Box>
            </Box>
        </>
    )
}

export default DiscountSection