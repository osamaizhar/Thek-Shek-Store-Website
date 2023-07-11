import React, { useState } from 'react'
import Apple from '../Assets/Images/brands/apple.png'
import Samsung from '../Assets/Images/brands/samsung.png'
import Infinix from '../Assets/Images/brands/Infinix.webp'
import Realme from '../Assets/Images/brands/realme.webp'
import Audionic from '../Assets/Images/brands/audionic.webp'
import Lenevo from '../Assets/Images/brands/lenevo.png'
import { Box, Grid, Heading, Image } from '@chakra-ui/react'
const Brands = () => {
    const [brands] = useState([
        {
            logo: Apple,
            name: 'apple'
        },
        {
            logo: Samsung,
            name: 'samsung'
        },
        {
            logo: Infinix,
            name: 'infinix'
        },
        {
            logo: Realme,
            name: 'realme'
        },
        {
            logo: Audionic,
            name: 'audionic'
        },
        {
            logo: Lenevo,
            name: 'lenevo'
        }
    ])
    return (
        <>
            <Heading my="20px" color={"teal"}>
                Brands
            </Heading>
            <Grid templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(6, 1fr)',
            }}
                gap={6}
                gridAutoFlow="dense"
                justifyContent="center"
                alignItems="center" >
                {
                    React.Children.toArray(
                        brands.map((brand) => {
                            return (
                                <Box id={brand.name} height={"200px"} link="" borderRadius={"20px"} bgColor={"gray.100"} shadow={"lg"}>
                                    <Image width={"100%"} height={"100%"} mixBlendMode={"darken"} aspectRatio={"2/1"} objectFit={"contain"} src={brand.logo} />
                                </Box>
                            )
                        })
                    )
                }
            </Grid>

        </>
    )
}

export default Brands