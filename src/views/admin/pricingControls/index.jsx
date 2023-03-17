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
// import baseurl from '../baseurl';
import { Checkbox } from 'primereact/checkbox';
import { ToggleButton } from 'primereact/togglebutton';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Dialog } from 'primereact/dialog';
import { Box, Button, Input, SimpleGrid, Text, useRadio } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
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



export default function PricingControls() {
    // Chakra Color Mode


    const tt = useRef(null);

    const [loading, setloading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [values1, setValues1] = useState([]);
    const [bit, setBit] = useState(false);
    const [activeArray, setActiveArray] = useState([]);

    const [allTemplates, setAllTemplates] = useState([]);

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


    const [allData, setAllData] = useState();
    const [tabMenus, setTabMenus] = useState([]);

    const [newPlanModalOpen, setNewPlanModalOpen] = useState(false);
    const [activeMenuPlanId, setaActiveMenuPlanId] = useState('-1');
    const [activeMenuData, setActiveMenuData] = useState([]);


    useEffect(() => {
        setloading(true)
        axios.get(`${baseurl}/plan-configuration`, {}, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
        })
            .then(res => {
                console.warn(res.data.data)
                setAllData(res?.data?.data)
                // alert(JSON.stringify(res.data))
                setaActiveMenuPlanId(res?.data?.data[0]._id?.toString())
                let a = []
                res?.data?.data?.forEach(item => {
                    console.warn(item)
                    a.push({
                        label: item.planName,
                        icon: 'pi pi-fw pi-home'
                    });
                })
                setTabMenus(a);














            })
            .catch(err => {


            })
            .finally(f => {
                setloading(false)
            })


        axios.get(`${baseurl}/all-templates`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
        })
            .then(res => {

                // alert(JSON.stringify(res.data.data))
                setAllTemplates(res?.data?.data)
            })
            .catch(err => {
                alert(err)
            })

    }, [])



    // useEffect(()=>{

    //     templatename()
        
        
    // },[])
    
    const templatename=(id)=>{
        console.log(id)
        switch(id) {
            case "63a743046733db557d8b6819":
              return "Dreamscape";
            case '6385bf0697e5cf9928d6d88e':
              return "Odyssey";
            case '63abfad13044c084db616391':
              return "Aurora";
            default:
              return "";
          }

    }












    useEffect(() => {
        if (activeMenuPlanId !== '-1') {
            setloading(true);
            axios.get(`${baseurl}/plan-configuration/${allData[activeIndex]?._id?.toString()}`, {}, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
                }
            })
                .then(res => {
                    // alert(JSON.stringify(res.data.data))
                    setActiveMenuData(res?.data?.data)
                    let temp = []
                    res?.data?.data?.supportedTemplates.forEach(item => {
                        temp.push(item?._id?.toString())
                    })
                    // alert("CALCULATED")
                    // alert(JSON.stringify(temp))
                    setActiveArray(temp);
                    // console.warn(res.data.data)
                    // // setAllData(res?.data?.data)
                    // // alert(JSON.stringify(res.data))
                    // let a=[]
                    // res?.data?.data?.forEach(item=>{
                    //     console.warn(item)
                    //   a.push({
                    //     label:item.planName,
                    //     icon:'pi pi-fw pi-home'
                    //   });
                    // })
                    // setTabMenus(a);
                })
                .catch(err => {

                    alert(err)
                })
                .finally(f => {
                    setloading(false)
                })
        }


    }, [activeIndex, allData, activeMenuPlanId, bit])




    const [nPlanName, sPN] = useState('');
    const [nPlanPrice, sPP] = useState('');
    const [d, setD] = useState(1);


    const handleNewPlan = () => {

        axios.post(`${baseurl}/plan-configuration`, {
            planName: nPlanName,
            planPrice: parseInt(nPlanPrice),
            totalFixedPrice: parseInt(nPlanPrice),
            durationInDays: d,
            numberOfCV: 1,
            supportedTemplates: [
            ],
            planDescriptionPoints: [],
            isWebUrlSuppored: true,
            isColorChangable: true
        }, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
        }).then(res => {

            tt.current.show({ severity: 'success', summary: 'Success Message', detail: 'Plan created successfully', life: 3000 });
            setNewPlanModalOpen(false);
            window.location.reload();
        }).catch(err => {

            tt.current.show({
                severity: 'error', summary: 'Error Message', detail: err.toString(), life: 3000
            });

        })

    }


















    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Toast ref={tt} />
            <SimpleGrid
                mb='20px'
                columns={{ sm: 1, md: 1 }}
                spacing={{ base: "20px", xl: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TabMenu
                        model={tabMenus}
                        activeIndex={activeIndex}
                        onTabChange={(e) => setActiveIndex(e.index)} />
                    <Button
                        colorScheme={'whatsapp'}
                        onClick={e => setNewPlanModalOpen(true)}
                    >+ NEW PLAN</Button>


                    <Dialog header="+ New Plan" visible={newPlanModalOpen} style={{ width: '50vw' }}
                        onHide={e => setNewPlanModalOpen(false)}
                    >
                        <table style={{ margin: 20 }}>
                            <tr>
                                <td>Plan Name</td>
                                <td style={{ padding: 10, margin: 10 }}>
                                    <Input border='2px'

                                        value={nPlanName}
                                        onChange={e => {
                                            sPN(e.target.value)
                                        }}

                                    />
                                </td>
                                <td>Plan Duration (days)</td>
                                <td style={{ padding: 10, margin: 10 }}>
                                    <Input border='2px'
                                        value={d}
                                        onChange={e => {
                                            setD(e.target.value)
                                        }}

                                    />
                                </td>


                                <td>Total Price</td>
                                <td style={{ padding: 10, margin: 10 }}>
                                    <Input border='2px'
                                        type={'number'}
                                        value={nPlanPrice}
                                        onChange={e => {
                                            sPP(e.target.value)
                                        }}

                                    />
                                </td>
                                <td>
                                    <Button colorScheme={'whatsapp'}
                                        onClick={() => handleNewPlan()}
                                    >
                                        CREATE PLAN </Button>

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
                                <form >

                                    <table style={{ margin: 20 }}>
                                        <tr>
                                            <td>Plan Name</td>
                                            <td style={{ padding: 10, margin: 10 }}>
                                                <Input border='2px'
                                                    disabled={activeMenuData?._id === '63cedd385c6963ce0bd47088'}
                                                    value={activeMenuData?.planName}
                                                    onChange={e => {
                                                        setActiveMenuData({
                                                            ...activeMenuData,
                                                            planName: e.target.value
                                                        })
                                                    }}
                                                />
                                            </td>


                                            <td>Atmost No. of CVs</td>
                                            <td style={{ padding: 10, margin: 10 }}>
                                                <Input border='2px'
                                                    type={'number'}

                                                    value={activeMenuData?.numberOfCV}
                                                    onChange={e => {
                                                        setActiveMenuData({
                                                            ...activeMenuData,
                                                            numberOfCV: e.target.value
                                                        })
                                                    }}

                                                />
                                            </td>

                                            <td style={{ padding: 10 }}>
                                                Web Url Feature
                                            </td>
                                            <td style={{ padding: 10 }}>
                                                <ToggleButton

                                                    checked={activeMenuData?.isWebUrlSuppored}
                                                    onChange={e => {
                                                        setActiveMenuData({
                                                            ...activeMenuData,
                                                            isWebUrlSuppored: e.target.value
                                                        })
                                                    }}
                                                />
                                            </td>
                                        </tr>



                                        <tr>
                                            <td>Total Fixed Price</td>
                                            <td style={{ padding: 10, margin: 10 }}>
                                                <Input border='2px' type={'number'}


                                                    value={activeMenuData?.totalFixedPrice}
                                                    onChange={e => {
                                                        setActiveMenuData({
                                                            ...activeMenuData,
                                                            planPrice: e.target.value,
                                                            totalFixedPrice: e.target.value
                                                        })
                                                    }}
                                                />
                                            </td>



                                            <td>Duration (days)</td>
                                            <td style={{ padding: 10, margin: 10 }}>
                                                <Input border='2px' type={'number'}


                                                    value={activeMenuData?.durationInDays}
                                                    onChange={e => {
                                                        setActiveMenuData({
                                                            ...activeMenuData,
                                                            durationInDays: e.target.value
                                                        })
                                                    }}
                                                />
                                            </td>



                                            <td>
                                                Color Changable
                                            </td>
                                            <td>
                                                <ToggleButton
                                                    checked={activeMenuData?.isColorChangable}
                                                    onChange={e => {
                                                        setActiveMenuData({
                                                            ...activeMenuData,
                                                            isColorChangable: e.target.value
                                                        })
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                        <div style={{ padding: 10 }}>

                                        </div>


                                    </table>

                                </form>
                                {console.warn(activeMenuData)}

                                <div style={{ display: 'flex' }}>
                                    <Carousel
                                        //  autoplayInterval={5000}
                                        style={{ width: '75%' }}
                                        circular={false}
                                        value={activeMenuData?.supportedTemplates} numVisible={3} numScroll={2}

                                        itemTemplate={ProductTemplate} header={<h5 style={{ paddingLeft: 20, paddingBottom: 20 }}>Templates and Color Combination Selection</h5>} />



                                    <div style={{marginTop:"1rem"}}>
                                        <h2>All Templates</h2>
                                        {console.warn(allTemplates)}
                                        {

                                            allTemplates.map(item => {
                                                console.warn(item)


                                                return <div className="col-12" style={{display:"flex"}}>
                                                    <Checkbox inputId="cb1" value={item._id?.toString()} checked={activeArray.includes(item._id?.toString())}


                                                        onChange={(e) => {
                                                            if (activeArray.includes(item?._id?.toString())) {
                                                                // alert("CHECK")
                                                                const arr = activeArray.filter(i => i !== item?._id?.toString())

                                                                setActiveArray(arr);
                                                            } else {
                                                                const arr = [...activeArray]
                                                                arr.push(item?._id?.toString())
                                                                setActiveArray(arr);
                                                            }
                                                            // alert(e.target.value)
                                                        }}
                                                    ></Checkbox>
                                                    {/* <label htmlFor="cb1" className="p-checkbox-label">{item._id?.toString()}</label> */}
                                                    <div><h1>{templatename(item._id)}</h1></div>
                                                </div>
                                            })
                                        }
                                    </div>

                                    {/* <div>
                                        <div className="col-12">
                                            <Checkbox inputId="cb1" value="New York" ></Checkbox>
                                            <label htmlFor="cb1" className="p-checkbox-label">New York</label>
                                        </div>
                                        <div className="col-12">
                                            <Checkbox inputId="cb2" value="San Francisco" ></Checkbox>
                                            <label htmlFor="cb2" className="p-checkbox-label">San Francisco</label>
                                        </div>
                                        <div className="col-12">
                                            <Checkbox inputId="cb3" value="Los Angeles" ></Checkbox>
                                            <label htmlFor="cb3" className="p-checkbox-label">Los Angeles</label>
                                        </div>
                                    </div> */}






                                </div>
                                {/* <div style={{ padding: 20 }}>
                                    <Button colorScheme={'whatsapp'}> Publish Changes </Button>
                                </div> */}
                            </div>
                        }

                    </Box>




                </div>





                <Fieldset legend="Plan Description Points">

                    <Chips style={{ width: 1000 }} value={activeMenuData.planDescriptionPoints} onChange={(e) => {
                        setActiveMenuData({
                            ...activeMenuData,
                            planDescriptionPoints: e.value
                        })
                    }} />



                </Fieldset>


                <div style={{ padding: 10, display: 'flex' }}>
                    <Button colorScheme={'whatsapp'}
                        onClick={() => {


                            let finalData = { ...activeMenuData }
                            finalData.supportedTemplates = activeArray;






                            axios.put(`${baseurl}/plan-configuration/${allData[activeIndex]?._id?.toString()}`,
                                finalData,
                                {
                                    headers: {
                                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
                                    }
                                }).then(res => {

                                    tt.current.show({ severity: 'success', summary: 'Success Message', detail: 'Changes Published successfully', life: 3000 });
                                    setBit(e => !e)
                                })
                                .catch(err => {
                                    tt.current.show({ severity: 'error', summary: 'Error Message', detail: err.toString(), life: 3000 });
                                })

                        }}
                    > Publish Changes </Button>



                    <div style={{ marginLeft: 10 }}>
                        {/* {all[]} */}
                        {(activeMenuData._id?.toString() !== "63cedd385c6963ce0bd47088") && <Button colorScheme={'red'}
                            onClick={() => {
                                axios.delete(`${baseurl}/plan-configuration/${allData[activeIndex]?._id?.toString()}`)
                                    .then(res => {
                                        tt.current.show({ severity: 'success', summary: 'Success Message', detail: 'Plan successfully Deleted', life: 3000 });
                                        // setBit(e => !e)
                                        window.location.reload()
                                    })

                                    .catch(err => {
                                        tt.current.show({ severity: 'error', summary: 'Error Message', detail: err.toString(), life: 3000 });
                                    })
                            }}
                        >
                            Delete Plan
                        </Button>}
                    </div>
                </div>
            </SimpleGrid>

                {console.warn(allTemplates)}

            {/* <Carousel autoplayInterval={5000}

                circular={false}
                numVisible={10} numScroll={10}
                value={allTemplates}
                itemTemplate={ProductTemplateB}
                header={<h5 style={{ paddingLeft: 20, paddingBottom: 20 }}>Templates and Color Combination Selection</h5>} />
        */}


<div style={{display:"flex",gap:"1rem"}}>
        {
            allTemplates.map((elem)=>{
                return(
                    <div key={elem._id}>

                        <div style={{display:"flex",justifyContent:"center"}}><h1>{templatename(elem._id)}</h1></div>

                        <img src={elem.thumbnailUrl} style={{width:"13rem",height:"18rem"}}/>



                    </div>
                )
            })

        }
            </div>
       
        </Box >
    );
}
