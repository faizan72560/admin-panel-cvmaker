/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import baseurl from "views/admin/baseurl";
// Chakra imports
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";

function SignIn() {
    // Chakra color mode
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
    const googleText = useColorModeValue("navy.700", "white");
    const googleHover = useColorModeValue(
        { bg: "gray.200" },
        { bg: "whiteAlpha.300" }
    );
    const googleActive = useColorModeValue(
        { bg: "secondaryGray.300" },
        { bg: "whiteAlpha.200" }
    );
    const [show, setShow] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const handleClick = () => setShow(!show);



    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(res => console.log("good"))
            .catch(err => console.log("KEEPGOING"))

        }, [])
        
        let  value= secureLocalStorage.getItem("83a570d5-e5cd-4af2-8f12-0a743d9cdb9b")
        console.log(value)







    return (
        <DefaultAuth illustrationBackground={illustration} image={illustration}>
            <Flex
                maxW={{ base: "100%", md: "max-content" }}
                w='100%'
                mx={{ base: "auto", lg: "0px" }}
                me='auto'
                h='100%'
                alignItems='start'
                justifyContent='center'
                mb={{ base: "30px", md: "60px" }}
                px={{ base: "25px", md: "0px" }}
                mt={{ base: "40px", md: "14vh" }}
                flexDirection='column'>
                <Box me='auto'>
                    <Heading color={textColor} fontSize='36px' mb='10px'>
                        Sign In
                    </Heading>
                    <Text
                        mb='36px'
                        ms='4px'
                        color={textColorSecondary}
                        fontWeight='400'
                        fontSize='md'>
                        Enter your email and password to sign in!
                    </Text>
                </Box>
                <Flex
                    zIndex='2'
                    direction='column'
                    w={{ base: "100%", md: "420px" }}
                    maxW='100%'
                    background='transparent'
                    borderRadius='15px'
                    mx={{ base: "auto", lg: "unset" }}
                    me='auto'
                    mb={{ base: "20px", md: "auto" }}>
                    {/* <Button
                        fontSize='sm'
                        me='0px'
                        mb='26px'
                        py='15px'
                        h='50px'
                        borderRadius='16px'
                        bg={googleBg}
                        color={googleText}
                        fontWeight='500'
                        _hover={googleHover}
                        _active={googleActive}
                        _focus={googleActive}>
                        <Icon as={FcGoogle} w='20px' h='20px' me='10px' />
                        Sign in with Google
                    </Button> */}
                    <Flex align='center' mb='25px'>
                        <HSeparator />
                        <Text color='gray.400' mx='14px'>
                            or
                        </Text>
                        <HSeparator />
                    </Flex>
                    <FormControl>
                        <FormLabel
                            display='flex'
                            ms='4px'
                            fontSize='sm'
                            fontWeight='500'
                            color={textColor}
                            mb='8px'>
                            Email<Text color={brandStars}>*</Text>
                        </FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{ base: "0px", md: "0px" }}
                            type='email'
                            placeholder='mail@simmmple.com'
                            mb='24px'
                            fontWeight='500'
                            size='lg'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <FormLabel
                            ms='4px'
                            fontSize='sm'
                            fontWeight='500'
                            color={textColor}
                            display='flex'>
                            Password<Text color={brandStars}>*</Text>
                        </FormLabel>
                        <InputGroup size='md'>
                            <Input
                                isRequired={true}
                                fontSize='sm'
                                placeholder='Min. 8 characters'
                                mb='24px'
                                size='lg'
                                type={show ? "text" : "password"}
                                variant='auth'
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                            />
                            <InputRightElement display='flex' alignItems='center' mt='4px'>
                                <Icon
                                    color={textColorSecondary}
                                    _hover={{ cursor: "pointer" }}
                                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                                    onClick={handleClick}
                                />
                            </InputRightElement>
                        </InputGroup>
                        <Flex justifyContent='space-between' align='center' mb='24px'>
                            <FormControl display='flex' alignItems='center'>
                                <Checkbox
                                    id='remember-login'
                                    colorScheme='brandScheme'
                                    me='10px'
                                />
                                <FormLabel
                                    htmlFor='remember-login'
                                    mb='0'
                                    fontWeight='normal'
                                    color={textColor}
                                    fontSize='sm'>
                                    Keep me logged in
                                </FormLabel>
                            </FormControl>
                            <NavLink to='/auth/forgot-password'>
                                <Text
                                    color={textColorBrand}
                                    fontSize='sm'
                                    w='124px'
                                    fontWeight='500'>
                                    Forgot password? it can only be reset from the code only.
                                </Text>
                            </NavLink>
                        </Flex>
                        <Button
                            fontSize='sm'
                            variant='brand'
                            fontWeight='500'
                            w='100%'
                            h='50'
                            mb='24px'
                            onClick={async() => {

                                // if (email === 'rajanchhabra@gmail.com' && pwd === 'LKJHlkjh@777') {
                                //     secureLocalStorage.setItem('83a570d5-e5cd-4af2-8f12-0a743d9cdb9b', true)
                                //     setTimeout(() => {
                                //         window.location.assign('/admin')
                                //     }, 1000)
                                // }

                                const res=await axios.post(`${baseurl}/admin-login`,{email,pwd})
                                console.log(res)
                                console.log("hello")
                                if(res.data.data==true){
                                    secureLocalStorage.setItem('83a570d5-e5cd-4af2-8f12-0a743d9cdb9b', true)
                                        setTimeout(() => {
                                            window.location.assign('/admin')
                                        }, 1000)

                                }



                            }}
                        >
                            Sign In
                        </Button>
                    </FormControl>
                    <Flex
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='start'
                        maxW='100%'
                        mt='0px'>
                        <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
                            {/* Not registered yet? */}
                            <NavLink to='/auth/sign-up'>
                                {/* <Text
                                    color={textColorBrand}
                                    as='span'
                                    ms='5px'
                                    fontWeight='500'>
                                    Create an Account
                                </Text> */}
                            </NavLink>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </DefaultAuth>
    );
}

export default SignIn;

// export {
//     SignIn,
//     // value,
// }
