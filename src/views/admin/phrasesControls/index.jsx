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
import { Checkbox } from 'primereact/checkbox';
import { ToggleButton } from 'primereact/togglebutton';
import { Dropdown } from 'primereact/dropdown';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Dialog } from 'primereact/dialog';
import { Box, Button, Input, SimpleGrid, Text, useRadio } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import { DataTable } from 'primereact/datatable';
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
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
import { Field, Form } from "react-final-form";

import React, { useState } from "react";
import { TabMenu } from 'primereact/tabmenu';
import { Chips } from 'primereact/chips';
import { MultiSelect } from 'primereact/multiselect';
import { Fieldset } from 'primereact/fieldset';
import { Toast } from 'primereact/toast';
import { Carousel } from 'primereact/carousel';
import { useEffect, useRef } from 'react';
import axios from 'axios';
import { Column } from 'primereact/column';
import * as XLSX from 'xlsx';
import { hoverColor } from '@locator/runtime/dist/consts';
import baseurl from '../baseurl';










const ProductTemplate = (product) => {


    // alert(JSON.stringify(product))


    // const [supportedColors, setSupportedColors] = useState([]);


    const [allColors, setAllColors] = useState([]);
    const [visColors, setVisColros] = useState([]);
    const [defaultColor, setDefaultColor] = useState([]);

    useEffect(() => {
        let b = []
        product.supportedColors.forEach((i) => {

            // `${product.defaultColorScheme[0].primary}-${product.defaultColorScheme[0].secondary}`
            if (i.primary === product.defaultColorScheme[0].primary && i.secondary === product.defaultColorScheme[0].secondary) {
                // alert("GOING")
                b.push({
                    label: <div style={{ display: 'flex', border: 'solid 5px black' }}>
                        <div style={{ height: 30, width: 30, background: i.primary }} />
                        <div style={{ height: 30, width: 30, background: i.secondary }} />
                    </div>,
                    value: `${i.primary}-${i.secondary}`,
                })
            } else
                b.push({
                    label: <div style={{ display: 'flex' }}>
                        <div style={{ height: 30, width: 30, background: i.primary }} />
                        <div style={{ height: 30, width: 30, background: i.secondary }} />
                    </div>,
                    value: `${i.primary}-${i.secondary}`,
                })
        })

        // setDefaultColor([
        //     {
        //         label: < div style={{ display: 'flex' }}>
        //             <div style={{ height: 30, width: 30, background: product.defaultColorScheme[0].primary }} />
        //             <div style={{ height: 30, width: 30, background: product.defaultColorScheme[0].secondary }} />
        //         </div >,
        //         value: `${product.defaultColorScheme[0].primary}-${product.defaultColorScheme[0].secondary}`
        //     }
        // ]);

        setAllColors(b)

    }, [])
    const citySelectItems = [
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' }
    ];


    const [cities, setCities] = useState([])


    // alert(JSON.stringify([`${product.defaultColorScheme[0].primary}-${product.defaultColorScheme[0].secondary}`]))



    return (
        <div className="product-item">
            {product?._id?.toString()}
            <div className="product-item-content">
                <div className="mb-3">
                    <img src={`${product.thumbnailUrl}`}
                        style={{
                            opacity: 1,
                            border: 'solid 3px dodgerblue'
                        }}
                        height={50}
                        width={200}
                        onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                        alt={product.name} className="product-image" />
                </div>
                <div>
                    {/* <h4 className="mb-1">{product.name}</h4> */}
                    {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
                    {/* <span className={`product - badge status - ${ product.inventoryStatus.toLowerCase() }`}>{product.inventoryStatus}</span> */}


                    {/* <ToggleButton onLabel="SHOW TO USER" offLabel="NOT SHOW"

                        onIcon="pi pi-check" offIcon="pi pi-times" checked={true} /> */}

                    <div>
                        <small>Default Color</small>
                    </div>

                    {defaultColor.length !== 0 ? <div style={{ display: 'flex', border: 'solid 5px #eee', width: 100, marginBottom: 10 }}>
                        <div style={{ height: 30, width: 50, background: defaultColor[0].split('-')[0] }} />
                        <div style={{ height: 30, width: 50, background: defaultColor[0].split('-')[1] }} />
                    </div>

                        : <div style={{ display: 'flex', border: 'solid 5px #eee', width: 100, marginBottom: 10 }}>
                            <div style={{ height: 30, width: 50, background: product.defaultColorScheme[0].primary }} />
                            <div style={{ height: 30, width: 50, background: product.defaultColorScheme[0].secondary }} />
                        </div>

                    }

                    <MultiSelect

                        showSelectAll={false}
                        selectionLimit={1} style={{ width: 200 }}
                        defaultValue={[`${product.defaultColorScheme[0].primary}-${product.defaultColorScheme[0].secondary}`]}
                        value={defaultColor}
                        options={allColors}
                        onChange={(e) => {

                            setDefaultColor(e.value)

                        }} />

                    <div>



                    </div>
                    {/* <div>
                        <small>Choices </small>
                    </div>
                    <MultiSelect style={{ width: 200 }} value={visColors} options={allColors} onChange={(e) => setVisColros(e.value)} />
 */}



                </div>
            </div>
        </div>
    );
}



const ProductTemplateB = (product) => {


    // alert(JSON.stringify(product))


    const [supportedColors, setSupportedColors] = useState([]);

    const citySelectItems = [
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' }
    ];


    const [cities, setCities] = useState([])






    return (
        <div className="product-item">
            <div className="product-item-content">
                <div className="mb-3">
                    {product?._id?.toString()}
                    <img src={`${product.thumbnailUrl}`}
                        style={{
                            opacity: 1,
                            border: 'solid 3px dodgerblue'
                        }}
                        height={50}
                        width={200}
                        onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                        alt={product.name} className="product-image" />
                </div>
                <div style={{ paddingTop: 10 }}>
                    {/* <h4 className="mb-1">{product.name}</h4> */}
                    {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
                    {/* <span className={`product - badge status - ${ product.inventoryStatus.toLowerCase() }`}>{product.inventoryStatus}</span> */}


                    {/* <ToggleButton onLabel="+ ADD" offLabel="NOT SHOW"

                        onIcon="pi pi-check" offIcon="pi pi-times" checked={true} />

 */}



                </div>
            </div>
        </div>
    );
}



export default function PhrasesControls() {
    // Chakra Color Mode


    const tt = useRef(null);

    const [loading, setloading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [values1, setValues1] = useState([]);
    const [bit, setBit] = useState(false);
    const [activeArray, setActiveArray] = useState([]);

    const [allTemplates, setAllTemplates] = useState([]);

//     Names of Templates:
// Aurora
// Odyssey
// Dreamscape
// Phoenix
// Enigma
// Genesis
// Zenith
// Spectra
// Infinity
// Nova
// Velocity
// Radiance
// Stellar
// Gravity
// Thunder
// Vortex
// Voyager
// Blaze
// Ascend
// Solstice
// Neon
// Radiance

    const TEMPLATE_DETAILS = [
        {
            templateId: '63abfad13044c084db616391',
            thumbnailUrl:
                'https://res.cloudinary.com/df2q7cryi/image/upload/v1671904887/Screenshot_2022-12-24_at_11.31.23_PM_gywjji.png',
        },
        {
            templateId: '6385bf0697e5cf9928d6d88e',
            thumbnailUrl:
                'https://res.cloudinary.com/df2q7cryi/image/upload/v1671904849/Screenshot_2022-12-24_at_11.30.42_PM_v1q42m.png',
        },
        {
            templateId: '63a743046733db557d8b6819',
            thumbnailUrl:
                'https://res.cloudinary.com/df2q7cryi/image/upload/v1671904769/Screenshot_2022-12-24_at_11.29.02_PM_t9gqht.png',
        },
    ];



    const items = [
        { label: 'FREEMIUM', icon: 'pi pi-fw pi-home' },
        { label: 'PREMIUM_FOR_1MONTH', icon: 'pi pi-fw pi-calendar' },
        { label: 'PREMIUM_FOR_3MONTH', icon: 'pi pi-fw pi-pencil' },
        { label: 'PREMIUM_FOR_12MONTHS', icon: 'pi pi-fw pi-file' },
        // {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];




    const citySelectItems = [
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' }
    ];


    const [cities, setCities] = useState([])
    const [products, setProducts] = useState([
        { "id": "1000", "code": "f230fh0g3", "name": "Bamboo Watch", "description": "Product Description", "image": "bamboo-watch.jpg", "price": 65, "category": "Accessories", "quantity": 24, "inventoryStatus": "INSTOCK", "rating": 5 },
        { "id": "1001", "code": "nvklal433", "name": "Black Watch", "description": "Product Description", "image": "black-watch.jpg", "price": 72, "category": "Accessories", "quantity": 61, "inventoryStatus": "INSTOCK", "rating": 4 },
        { "id": "1002", "code": "zz21cz3c1", "name": "Blue Band", "description": "Product Description", "image": "blue-band.jpg", "price": 79, "category": "Fitness", "quantity": 2, "inventoryStatus": "LOWSTOCK", "rating": 3 },
        { "id": "1003", "code": "244wgerg2", "name": "Blue T-Shirt", "description": "Product Description", "image": "blue-t-shirt.jpg", "price": 29, "category": "Clothing", "quantity": 25, "inventoryStatus": "INSTOCK", "rating": 5 },
        { "id": "1004", "code": "h456wer53", "name": "Bracelet", "description": "Product Description", "image": "bracelet.jpg", "price": 15, "category": "Accessories", "quantity": 73, "inventoryStatus": "INSTOCK", "rating": 4 },
        { "id": "1005", "code": "av2231fwg", "name": "Brown Purse", "description": "Product Description", "image": "brown-purse.jpg", "price": 120, "category": "Accessories", "quantity": 0, "inventoryStatus": "OUTOFSTOCK", "rating": 4 },
        { "id": "1006", "code": "bib36pfvm", "name": "Chakra Bracelet", "description": "Product Description", "image": "chakra-bracelet.jpg", "price": 32, "category": "Accessories", "quantity": 5, "inventoryStatus": "LOWSTOCK", "rating": 3 },
        { "id": "1007", "code": "mbvjkgip5", "name": "Galaxy Earrings", "description": "Product Description", "image": "galaxy-earrings.jpg", "price": 34, "category": "Accessories", "quantity": 23, "inventoryStatus": "INSTOCK", "rating": 5 },
        { "id": "1008", "code": "vbb124btr", "name": "Game Controller", "description": "Product Description", "image": "game-controller.jpg", "price": 99, "category": "Electronics", "quantity": 2, "inventoryStatus": "LOWSTOCK", "rating": 4 },
        { "id": "1009", "code": "cm230f032", "name": "Gaming Set", "description": "Product Description", "image": "gaming-set.jpg", "price": 299, "category": "Electronics", "quantity": 63, "inventoryStatus": "INSTOCK", "rating": 3 }
    ]);


    // const [allData, setAllData] = useState();
    const [tabMenus, setTabMenus] = useState([]);

    const [newPlanModalOpen, setNewPlanModalOpen] = useState(false);
    const [activeMenuPlanId, setaActiveMenuPlanId] = useState('-1');
    const [activeMenuData, setActiveMenuData] = useState([]);

    const [newCategoryModalOpen, setNewCategoryModalOpen] = useState(false);


    const [allData, setAllData] = useState([])


    const [allCategoriesData, setAllCategoriesData] = useState([]);

    const [catCode, setCatCode] = useState('')

    const [newPhrase, setNewPhrase] = useState('')

    const [newCategoryName, setNewCategoryName] = useState('')
    const [excelFile, setExcelFile] = useState(null);
    const [jsonObject, setJsonObject] = useState(null);

    useEffect(() => {
        setloading(true)
        axios.get(`${baseurl}/fetch-all-phrases/all`, {}, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
        })
            .then(res => {
                console.warn(res.data.data)
                setAllData(res?.data?.data)


            })
            .catch(err => {


            })
            .finally(f => {
                setloading(false)
            })


        axios.get(`${baseurl}/search-categorys`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
        })
            .then(res => {

                // alert(JSON.stringify(res.data.data))
                let x = [];
                res?.data?.data.map(item => {
                    x.push({ categoryName: item?.categoryName, categoryCode: item?.categoryCode })
                })


                setAllCategoriesData(x)

            })
            .catch(err => {
                alert(err)
            })

    }, [])
















    const [nPlanName, sPN] = useState('');
    const [nPlanPrice, sPP] = useState('');
    const [d, setD] = useState(1);


    const handleNewPhrase = () => {
        console.log(catCode.categoryCode)

        axios.post(`${baseurl}/create-phrase`, {
            categoryCode: catCode.categoryCode,
            phrase: newPhrase
        }, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
        }).then(res => {

            tt.current.show({ severity: 'success', summary: 'Success Message', detail: 'Phrase created successfully', life: 3000 });
            setNewPlanModalOpen(false);
            window.location.reload();
        }).catch(err => {

            tt.current.show({
                severity: 'error', summary: 'Error Message', detail: err.toString(), life: 3000
            });

        })

    }





    const handleNewCategory = () => {
        axios.post(`${baseurl}/create-phrases-category`, {
            categoryName: newCategoryName
        }, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
        }).then(res => {

            setNewCategoryModalOpen(false);
            tt.current.show({ severity: 'success', summary: 'Success Message', detail: 'Category created successfully', life: 3000 });
            window.location.reload();
            console.log(res)
        }).catch(err => {

            tt.current.show({
                severity: 'error', summary: 'Error Message', detail: err.toString(), life: 3000
            });

        })
    }

    var [bulkphrase, setbulkphrase] = useState([])


    const exceltojson= async(e)=>{
        console.log('reading input file:');
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        console.warn(data)
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        var jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
            defval: "",
        });
    
        //console.log(e.target.files[0]);
        //console.log(workbook);
        console.log(jsonData)
        console.log(jsonData[1][0]);

        let arr=[]
        
        for(let i=1;i<jsonData.length;i++){
            // var length=jsonData[i].length
            for(let j=1;j<jsonData[i].length;j++){
                let obj={categoryName:"",phrase:"",id:0}
                // for(let k=j+1;k<=arr[i].length;k++){
                    obj.categoryName=jsonData[i][0]
                    obj.phrase=jsonData[i][j]
                    obj.id+=1
                    arr.push(obj)
                    

                // }
               

                


            }

        }

        console.warn(arr)
        setbulkphrase(arr)

        




    }

    const addbulkphrase=async()=>{
        const res=await axios.post(`${baseurl}/createbulk-phrase`,bulkphrase)
        console.warn(res)

    }










    const [selectedData, setSelectedData] = useState([]);



    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Toast ref={tt} />
            <SimpleGrid
                mb='20px'
                columns={{ sm: 1, md: 1 }}
                spacing={{ base: "20px", xl: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* <TabMenu
                        model={tabMenus}
                        activeIndex={activeIndex}
                        onTabChange={(e) => setActiveIndex(e.index)} /> */}
                    <Button
                        colorScheme={'whatsapp'}
                        onClick={e => setNewPlanModalOpen(true)}
                    >+ NEW PHRASE</Button>
                    <Button
                        variant={'outline'}
                        colorScheme={'whatsapp'}
                        onClick={e => setNewCategoryModalOpen(true)}
                    >+ NEW JOB TITLE</Button>


<div
      style={{
        display: 'inline-block',
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '8px 16px',
        borderRadius: '20px',
        // cursor: 'pointer',
        // width:"15rem"
      }}
      onClick={addbulkphrase}
    >
      <span style={{ marginRight: '8px', height:"4rem" }}>Add File </span>
      <input
        type="file"
        style={{backgroundColor:"skyblue" }}
        onChange={exceltojson}
        // ref={inputRef}
      />
    </div>



                    <Dialog header="+ New Job Title" visible={newCategoryModalOpen} style={{ width: '50vw' }}
                        onHide={e => setNewCategoryModalOpen(false)}
                    >
                        <table style={{ margin: 20 }}>
                            <tr>

                                <td>Job Title</td>
                                <td style={{ padding: 10, margin: 10 }}>

                                    <Input
                                        value={newCategoryName}
                                        onChange={e => setNewCategoryName(e.target.value)}

                                    />
                                </td>



                                <td>
                                    <Button colorScheme={'whatsapp'}
                                        onClick={() => handleNewCategory()}
                                    >
                                        CREATE JOB TITLE </Button>

                                </td>
                            </tr>
                        </table>





                    </Dialog>








                    <Dialog header="+ New Phrase" visible={newPlanModalOpen} style={{ width: '50vw' }}
                        onHide={e => setNewPlanModalOpen(false)}
                    >
                        <table style={{ margin: 20 }}>
                            <tr>
                                <td>Select Job Title</td>
                                <td style={{ padding: 10, margin: 10 }}>
                                    <Dropdown
                                        options={allCategoriesData}
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

                                    {console.log(catCode._id)}

                                </td>
                                <td>Phrase</td>
                                <td style={{ padding: 10, margin: 10 }}>

                                    <Input
                                        value={newPhrase}
                                        onChange={e => setNewPhrase(e.target.value)}
                                    />
                                </td>



                                <td>
                                    <Button colorScheme={'whatsapp'}
                                        onClick={() => handleNewPhrase()}
                                    >
                                        CREATE PHRASE </Button>

                                </td>
                            </tr>
                        </table>





                    </Dialog>


                </div>
                <div>


                    <Box bg={'white'} pt={{}}>

                        {loading ? <ProgressSpinner />
                            :
                            <div>

                                <Fieldset legend="Existing Phrases">

                                    <DataTable value={allData} responsiveLayout="scroll" selectionMode="multiple" selection={selectedData} onSelectionChange={(e) =>{ setSelectedData(e.value)
                                    console.log(e.value)}}>
                                        <Column field="categoryName" header="Job Title"></Column>
                                        <Column field="phrase" header="Value"></Column>
                                    </DataTable>




                                </Fieldset>
                            </div>
                        }

                    </Box>




                </div>






                {/* <Chips style={{ width: 1000 }} value={activeMenuData.planDescriptionPoints} onChange={(e) => {
                        setActiveMenuData({
                            ...activeMenuData,
                            planDescriptionPoints: e.value
                        })
                    }} /> */}








            </SimpleGrid>


            {/* 
            <Carousel autoplayInterval={5000}

                circular={false}
                numVisible={10} numScroll={10}
                value={allTemplates}
                itemTemplate={ProductTemplateB}
                header={<h5 style={{ paddingLeft: 20, paddingBottom: 20 }}>Templates and Color Combination Selection</h5>} /> */}
        </Box >
    );
}
