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
import { Box, SimpleGrid } from "@chakra-ui/react";
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
import React, { useState } from "react";



import { DataTable } from 'primereact/datatable';
import CustomerTable from "components/customer-table";














export default function Settings() {
    // Chakra Color Mode

    const [search, setSearch] = useState('');
    // const [data, setdata] = useState(all_data);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [user, setuser] = useState([])





    //   React.useEffect(function effectFunction() {
    //     async function fetchusers() {
    //         fetch('http://localhost:3001/all-users')
    //        .then(response => response.json())
    //        .then(({ data: data }) => {
    //         alert(JSON.stringify(data))
    //            setuser(data);
    //            console.log(user)
    //        });
    //     }
    //     fetchusers();
    // }, []);




    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <SimpleGrid
                mb='20px'
                columns={{ sm: 1, md: 1 }}
                spacing={{ base: "20px", xl: "20px" }}>
                {/* <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        /> */}
                <CustomerTable />

            </SimpleGrid>
        </Box>
    );
}
