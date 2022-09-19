import React, {useState} from 'react'
import {
    Flex,
    Box,
    Button,
  } from '@chakra-ui/react';

function CategoriesItems(props) {
    let [categoryTitle, setCategoryTitle] = useState("");

    const categoryTitleHandler = (e) => {
      categoryTitle=e.target.innerText;
      setCategoryTitle(categoryTitle);
      props.getCategoryTitle(categoryTitle);
    }

    return (
        <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='5'>
          {props.uniqueCategory.map((item,index) =>(
        <Box key={index} m={1} p={1} onClick={(e)=>categoryTitleHandler(e)}>
             <Button color={'white'} bg={props.styleAColorHex}>
        {item}  
        </Button>
       
       
         </Box>    
          ))} 
        </Flex>
    )
}

export default CategoriesItems