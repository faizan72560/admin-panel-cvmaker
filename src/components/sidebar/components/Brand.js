import React from "react";

// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import secureLocalStorage from "react-secure-storage";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
    //   Chakra color mode
    let logoColor = useColorModeValue("navy.700", "white");

    return (
        <>
        <Flex align='center' direction='column'>
            <img src="https://res.cloudinary.com/df2q7cryi/image/upload/v1674231572/logo-original_tmuobp.png"
                alt="cvmaker.me"
                width={200}
                height={20}
            />
            <Text color={'blue.800'} >admin console</Text>

            <HSeparator mb='20px' />
        </Flex>
        <button className="btn btn-primary" onClick={()=>{
            secureLocalStorage.removeItem("83a570d5-e5cd-4af2-8f12-0a743d9cdb9b");

            setTimeout(()=>{
                window.location.assign('/')

            },1000)

        }}>Log Out</button>
        </>
    );
}

export default SidebarBrand;
