import { Box, Button, Flex, Image,} from '@chakra-ui/react';
import React, {useState} from 'react';

import { resturantInfo } from '../data/ResturantInfo';
import { categories } from '../data/Categories';
import { menuList } from '../data/MenuList';

import Navbar from '../components/Navbar';
import IndividualItems from '../components/IndividualItems';
import CategoriesItems from '../components/CategoriesItems';



export default function Menu() {

  function refreshPage() {
    window.location.reload(false);
  }

  const [getCategoryTitle, setGetCategoryTitle] = useState("All");

  const getCategory = (categoryTitle) => {
    setGetCategoryTitle(categoryTitle);
  }
  return (
    <>
        <Navbar companyName={resturantInfo.name} styleAColorHex={'#FF2C55'} />   
         <Flex justifyContent="center" alignContent="center" my={2}>
            <Image minW={"300px"} maxW={"300px"}  src={resturantInfo.logo}/>
            </Flex>
            <CategoriesItems styleAColorHex={'#FF2C55'} getCategoryTitle={getCategory} uniqueCategory={categories.categories}/>
           <Flex flexWrap='wrap' m='5'  justifyContent='center'  borderColor='gray.100' alignContent={"center"}>
            {menuList[getCategoryTitle].length===0?(
              <p>No Items Found!</p>
            ):(
              menuList[getCategoryTitle].map((item,index)=>(
                <Box key={index}>
                    <IndividualItems currency={"SGD"}  item={item} styleAColorHex={'#FF2C55'} />
                </Box>           
            ))
          )}  


         </Flex>
         <Flex flexWrap='wrap' m='5'  alignContent={"center"}>
        <Button bg={'grey'} color='white' onClick={refreshPage}>
                 
                    Back
                </Button> 
                </Flex>
    </>
  );
}
