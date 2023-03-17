
import React, { useState } from 'react';
import { Editor } from 'primereact/editor';


import { InputTextarea } from 'primereact/inputtextarea';
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import { FileUpload } from 'primereact/fileupload';

import { Button } from "@chakra-ui/react";

import { Accordion, AccordionTab } from 'primereact/accordion';

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
import  { useEffect } from "react";
import { TabMenu } from 'primereact/tabmenu';
// import Editor from "./components/Editor";
// import EditorBox from "./components/Editor";
import axios from 'axios';

import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Fieldset } from "primereact/fieldset";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
import { Chips } from "primereact/chips";

const EditorBox = () => {
    const [loading, setLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(3);
    const [allData, setAllData] = useState([]);
    const [tempEditData, setTempEditData] = useState([]);

    const [catCode, setCatCode] = useState('')
    const [blogCategories, setBlogCategories] = useState([]);


    const [blogCategoryArray, setBlogCategoryArray] = useState([]);



    
    
    const [text1, setText1] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');
    const [text2, setText2] = useState('');
    
    const [header, setheader] = useState('')
    const [content, setcontent] = useState('')
    const [metaTitle, setmetaTitle] = useState('')
    const [metaDescription, setmetaDescription] = useState('')
    const [category, setcategory] = useState('')
    
    console.warn(text1)
    
    const Publish=async()=>{
        setcontent(text1)

        const res= await axios.post("http://localhost:3001/blogs",{header,content,metaTitle,metaDescription,category})
        console.log(res)
        
    }
    // const renderHeader = () => {
    //     return (
    //         <span className="ql-formats">
    //             <button className="ql-bold" aria-label="Bold"></button>
    //             <button className="ql-italic" aria-label="Italic"></button>
    //             <button className="ql-underline" aria-label="Underline"></button>
    //         </span>
    //     );
    // }

    // const header = renderHeader();

    return (
        <div>
            <div className="card" style={{ width: 1000, height: 600, background: '#eee',display:"flex", }}>
                {/* <h5>Default</h5> */}
                <div>
                <Editor style={{ width: '100%', height: 600 }} value={text1} onTextChange={(e) => setText1(e.htmlValue)} />
                </div>

                <div style={{backgroundColor:"white"}}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>



<Box background={'white'} style={{ width: '50%' }}>

   

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
                        setheader(e.target.value)
                    }}
                    value={header} />
            </td>
        </tr>


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

                <InputText
                 onChange={(e) => {
                    setmetaTitle(e.target.value)
                }}
                    value={metaTitle}
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

                <InputText
                onChange={(e)=>{setmetaDescription(e.target.value)}}
                    value={metaDescription}

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
                Category </td>
            <td
                style={{
                    border: 'solid 1px black',
                    padding: 10
                }}
            >

                <InputText
                onChange={(e)=>{setcategory(e.target.value)}}
                    value={category}

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

       

    </table>
    <div style={{display:"flex",justifyContent:"center"}}>

    <Button
        colorScheme={'whatsapp'}
        style={{ marginTop: 5  ,width:"20rem" ,fontSize:"1.2rem" }}
        onClick={Publish}
    >
        Publish 
    </Button>
    </div>
</Box>







</div>

                </div>
             

            </div>

            <div className="card" style={{ width: 1000, height: 600, background: 'white', border: 'solid 1px black', marginTop: 130 }}

                dangerouslySetInnerHTML={{
                    __html: text1
                }}
            >
                
                {/* <h5>Default</h5> */}


            </div>

        </div>
    );
}

export default EditorBox

