import React from 'react'
import Banner from '../components/Banner'
import DiscountSection from '../components/DiscountSection'
import Brands from '../components/Brands'
import { Box } from '@chakra-ui/react'
const Home = () => {
    return (
        <>
            <Banner />
            <Box mx={{ lg: "150px", md: "50px", base: "10px" }}>
                <DiscountSection />
                <Brands />
            </Box>
        </>
    )
}

export default Home