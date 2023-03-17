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

// Chakra imports
import baseurl from '../baseurl'
import { InputTextarea } from 'primereact/inputtextarea';
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import { FileUpload } from 'primereact/fileupload';

import { Button } from "@chakra-ui/react";
import Update from './Update';

import { Accordion, AccordionTab } from 'primereact/accordion';
import { Editor } from 'primereact/editor';

import {
    columnsDataDevelopment,
    columnsDataCheck,
    columnsDataColumns,
    columnsDataComplex,
} from "views/admin/dataTables/variables/columnsData";
import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";
import tableDataComplex from "views/admin/dataTables/variables/tableDataComplex.json";
import React, { useEffect, useState } from "react";
import { TabMenu } from 'primereact/tabmenu';
// import Editor from "./components/Editor";
import EditorBox from "./components/Editor";
import axios from 'axios';

import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Fieldset } from "primereact/fieldset";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
import { Chips } from "primereact/chips";



export default function BlogControls() {
    // Chakra Color Mode


    const [loading, setLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(3);
    const [allData, setAllData] = useState([]);
    const [tempEditData, setTempEditData] = useState([]);

    const [catCode, setCatCode] = useState('')
    const [blogCategories, setBlogCategories] = useState([]);


    const [blogCategoryArray, setBlogCategoryArray] = useState([]);


    const items = [
        { label: 'Blog Listing', icon: 'pi pi-fw pi-home' },
        // { label: 'Blog Categories', icon: 'pi pi-fw pi-home' },
        { label: 'Create', icon: 'pi pi-fw pi-calendar' },
    ];





    useEffect(() => {
        setActiveIndex(0);

        axios.get(`${baseurl}/blogs`, {}, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
        })
            .then(res => {
                console.warn(res.data.data)
                setAllData(res?.data?.data)
                // setTempAllData(res?.data?.data);

            })
            .catch(err => {


            })
            .finally(f => {
                setLoading(false)
            })



        axios.get(`${baseurl}/fetch-all-category?ib=true`, {}, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
        })
            .then(res => {
                console.warn(res.data.data)
                // alert(JSON.stringify(res?.data?.data))
                setBlogCategories(res?.data?.data)

                let b = [];

                res?.data?.data?.forEach(e => {
                    b.push(e.categoryName)
                })
                setBlogCategoryArray(b);

            })
            .catch(err => {


            })
            .finally(f => {
                setLoading(false)
            })











    }, [])


    const Publish=async(id)=>{
        console.warn(id)
        const res=await axios.post(`${baseurl}/update-blogs/${id}`,tempEditData)
        console.log(res)
        setTimeout(()=>{
            window.location.reload()
        },1000)
        
    }

    const Delete=async(id)=>{
        console.warn(id)
        const res=await axios.post(`${baseurl}/delete-blogs/${id}`,tempEditData)
        console.log(res)
        setTimeout(()=>{
            window.location.reload()
        },1000)
        
    }

    




















 
    const [content, setText1] = useState('');
    const [text2, setText2] = useState('');

    const [update, setupdate] = useState(false)
    // setText1(tempEditData.content)
    // console.log(text1)


    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            {/* {activeIndex} */}
            
            <SimpleGrid
                mb='20px'
                columns={{ sm: 1, md: 1 }}
                spacing={{ base: "20px", xl: "20px" }}>

                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />



                {activeIndex === 0 && <Box background={'white'}>

                    <Fieldset legend="Blog Categories">

                        <div style={{ display: 'flex', }}>
                            <Chips
                                removable={false}
                                // style={{ width: 1000 }}
                                value={blogCategoryArray}
                                onChange={(e) => {

                                    setBlogCategoryArray(e.target.value)
                                }} />

                            <Button
                                colorScheme={'whatsapp'}>
                                Add
                            </Button>
                        </div>

                    </Fieldset>
                </Box>
                }

                {activeIndex === 0 && < Box background={'white'} style={{ padding: 20, display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        Filter by  Categories

                        &nbsp; &nbsp;
                        <Dropdown
                            options={blogCategories}
                            value={catCode?.categoryCode}
                            optionLabel="categoryName"
                            onChange={e => {
                                setCatCode({
                                    categoryCode: e.target.value?.categoryCode,
                                    categoryName: e.target.value?.categoryName
                                })
                            }}

                            placeholder={catCode?.categoryName || "Select"}
                        />
                    </div>



                </Box>
                }
                <Box background={'white'}>

                    {activeIndex === 1 && <div style={{ display: 'flex',width:"100%" }}>
                        {/* <div> */}
                        <EditorBox />
                        {/* </div> */}
                       
                        
                        </div>}



                    {activeIndex === 0 &&


                        <div style={{ display: 'flex', justifyContent: 'space-between' }} >



                            <Box background={'white'} style={{ width: '50%' }}>

                                <Accordion
                                    onTabChange={(e) => {
                                        if (e.index !== null)
                                            setTempEditData(allData[e.index])
                                        else
                                            setTempEditData(allData[0])
                                            setupdate(false)
                                    }}
                                >
                                    {allData?.map(item => <AccordionTab
                                        key={item?._id?.toString()}
                                        style={{
                                            borderRightWidth: (item._id?.toString() === tempEditData?._id?.toString()) ? 5 : 0,
                                            borderLeftWidth: (item._id?.toString() === tempEditData?._id?.toString()) ? 5 : 0,
                                            borderColor: 'navy'
                                        }}
                                        header={`${item?.header}`}

                                    >

                                    </AccordionTab>)}





                                </Accordion>
                <div>
                    {update&&<div style={{display:"flex",justifyContent:"center"}}>
                    <h1 style={{fontSize:"2rem"}}>Update Content</h1>
                    </div>}
                    {
                        update&&(<div><Editor style={{ width: '100%', height: 300 }} value={content} onTextChange={(e) => setText1(e.htmlValue)} />
                         {/* onChange={(e) => {
                                                setTempEditData({
                                                    ...tempEditData,
                                                    category: e.target.value
                                                })
                                                console.log(tempEditData)
                                               
                                            }} */}
                                            <div style={{display:"flex",justifyContent:"center"}}>
                            <Button style={{marginBottom:"1rem",marginTop:"1rem",backgroundColor:"skyblue", transition: "all ease .5s",
  ":hover": {
    backgroundColor: "blue",
    color: "#ffffff"
  }}} onClick={async()=>{
                                console.log(content)
                                const res=await axios.post(`${baseurl}/update-blogs-content/${tempEditData._id}`,{content})
                                console.log(res)


                            }}>Update Content</Button>
                            </div>
                        </div>
                        )
                    }
                

                </div>
                                <div>
                {localStorage.setItem("content",tempEditData.content)}
                {/* {setText1(localStorage.getItem("content"))} */}
              {true&& <Editor style={{ width: '100%', height: 300 }} value={tempEditData.content}  />}
                </div>


                <div className="card" style={{ width: 600, height: 600, background: 'white', border: 'solid 1px black', marginTop: 130 }}

                dangerouslySetInnerHTML={{
                    __html: tempEditData.content
                }}
            >
                
               


            </div>


                                {/* <Editor style={{ width: '100%', height: 600 }} value={text1} onTextChange={(e) => setText1(e.htmlValue)} /> */}




                            </Box>


                            <Box background={'white'}>
                                <table style={{
                                    border: 'solid 1px black',
                                    width: '100%'
                                }}>


                                    <tr>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}

                                        >Title </td>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}
                                        >
                                            <InputText
                                                onChange={(e) => {
                                                    setTempEditData({
                                                        ...tempEditData,
                                                        header: e.target.value
                                                    })
                                                    console.log(tempEditData)
                                                   
                                                }}
                                                value={tempEditData.header} />
                                        </td>
                                    </tr>






                                    {/* <tr>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}

                                        >
                                            Link </td>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}
                                        >

                                            <a target="_blank"

                                                href={`https://cvmaker.me/blogs/${'fajsdklf-asjdlkf'}`}>
                                                https://cvmaker.me/blogs/fajsdklf-asjdlkf
                                            </a>
                                        </td>
                                    </tr> */}













                                    <tr>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}

                                        >
                                            Meta Title </td>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}
                                        >

                                            <InputTextarea
                                            onChange={(e) => {
                                                setTempEditData({
                                                    ...tempEditData,
                                                    metaTitle: e.target.value
                                                })
                                                console.log(tempEditData)
                                               
                                            }}
                                                value={tempEditData?.metaTitle}
                                            />
                                        </td>
                                    </tr>




                                    <tr>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}

                                        >
                                            Meta Description </td>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}
                                        >

                                            <InputTextarea
                                            onChange={(e) => {
                                                setTempEditData({
                                                    ...tempEditData,
                                                    metaDescription: e.target.value
                                                })
                                                console.log(tempEditData)
                                               
                                            }}
                                                value={tempEditData?.metaDescription}

                                            />
                                        </td>
                                    </tr>



                                    {/* <tr>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}

                                        >
                                            Category</td>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}
                                        >

                                            <Dropdown
                                                options={blogCategories}
                                                value={catCode?.categoryCode}
                                                optionLabel="categoryName"
                                                onChange={e => {
                                                    setCatCode({
                                                        categoryCode: e.target.value?.categoryCode,
                                                        categoryName: e.target.value?.categoryName
                                                    })
                                                }}

                                                placeholder={catCode?.categoryName || "Select"}
                                            />
                                        </td>
                                    </tr> */}


<tr>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}

                                        >
                                             Content </td>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}
                                        >
                                            <Button style={{backgroundColor:"skyblue"}} onClick={()=>{
                                                
                                                setupdate(true)

                                            }}>Update Content</Button>

                                        </td>
                                    </tr>


                                    

                                    <tr>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}

                                        >
                                            Category </td>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}
                                        >

                                            <InputTextarea
                                            onChange={(e) => {
                                                setTempEditData({
                                                    ...tempEditData,
                                                    category: e.target.value
                                                })
                                                console.log(tempEditData)
                                               
                                            }}
                                                value={tempEditData?.category}

                                            />
                                        </td>
                                    </tr>


{/* 
                                    <tr>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}

                                        >
                                            Edit </td>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}
                                        >

                                            <Button
                                                colorScheme={'facebook'}
                                            >Edit Blog Content</Button>
                                        </td>
                                    </tr> */}



                                    {/* <tr>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}

                                        >
                                            Thumbnail</td>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}
                                        >

                                            <FileUpload

                                                mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={e => null} />

                                        </td>
                                    </tr> */}

                                    <tr>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}

                                        >
                                            Timestamp</td>
                                        <td
                                            style={{
                                                border: 'solid 1px black',
                                                padding: 10
                                            }}
                                        >

                                            <div>Last updated - {tempEditData?.updatedAt}</div>
                                            <div>Created - {tempEditData?.createdAt}</div>
                                        </td>
                                    </tr>


                                </table>
                                <div style={{display:"flex",gap:"1rem"}}>
                                <Button
                                    colorScheme={'whatsapp'}
                                    style={{ marginTop: 10 }}
                                    onClick={()=>{Publish(tempEditData?._id)}}
                                >
                                    Publish Changes
                                </Button>

                                <Button
                                    colorScheme={'whatsapp'}
                                
                                    style={{ marginTop: 10,backgroundColor:"red" }}
                                    onClick={()=>{Delete(tempEditData?._id)}}
                                >
                                    Delete
                                </Button>
                                </div>
                            </Box>







                        </div>
                    
                    
                    }




                </Box>




            </SimpleGrid >
        </Box >
    );
}
