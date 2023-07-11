import React from 'react'
import Banner from '../components/Banner'
import DiscountSection from '../components/DiscountSection'
import Brands from '../components/Brands'
import { Box } from '@chakra-ui/react'
const Home = () => {
    return (
        <>
            <Banner />
            <Box px="150px">
                <DiscountSection />
                <Brands />
            </Box>
        </>
    )
}

export default Home