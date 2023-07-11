import React, { useState } from 'react'
import Apple from '../Assets/Images/brands/apple.png'
import Samsung from '../Assets/Images/brands/samsung.png'
import Infinix from '../Assets/Images/brands/Infinix.webp'
import Realme from '../Assets/Images/brands/realme.webp'
import Audionic from '../Assets/Images/brands/audionic.webp'
import { Box, Heading, Image, Stack } from '@chakra-ui/react'
const Brands = () => {
    const [brands] = useState([
        {
            logo: Apple
        },
        {
            logo: Samsung
        },
        {
            logo: Infinix
        },
        {
            logo: Realme
        },
        {
            logo: Audionic
        },
    ])
    return (
        <>
            <Heading my="20px" color={"teal"}>
                Brands
            </Heading>

            <Stack my="20px" align='stretch' direction={['column', 'row']}>
                {
                    React.Children.toArray(
                        brands.map((brand) => {
                            return (
                                <Box height={"200px"} borderRadius={"20px"} bgColor={"gray.100"} shadow={"lg"}>
                                    <Image width={"100%"}  height={"100%"} mixBlendMode={"darken"} aspectRatio={"2/1"} objectFit={"contain"} src={brand.logo} />
                                </Box>
                            )
                        })
                    )
                }
            </Stack>
        </>
    )
}

export default Brands