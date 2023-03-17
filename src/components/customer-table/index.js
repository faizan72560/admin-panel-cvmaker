
import React, { useState, useEffect, useRef } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { CustomerService } from '../../services/CustomerService';
import * as XLSX from 'xlsx';
import './index.css';
import { ButtonGroup, Icon, Text } from '@chakra-ui/react';
import { MdCancel, MdCheckCircle } from 'react-icons/md';
import { Toast } from 'primereact/toast';
import { uuid } from 'uuidv4';
import { JsonToExcel } from "react-json-to-excel";
import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag


import { Popover, Whisper } from 'rsuite';




import * as dayjs from 'dayjs'
import axios from 'axios';
const CustomerTable = () => {

    const toast = useRef(null);

    const [customers, setCustomers] = useState(null);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const representatives = [
        { name: "Amy Elsner", image: 'amyelsner.png' },
        { name: "Anna Fali", image: 'annafali.png' },
        { name: "Asiya Javayant", image: 'asiyajavayant.png' },
        { name: "Bernardo Dominic", image: 'bernardodominic.png' },
        { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
        { name: "Ioni Bowcher", image: 'ionibowcher.png' },
        { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
        { name: "Onyama Limba", image: 'onyamalimba.png' },
        { name: "Stephen Shaw", image: 'stephenshaw.png' },
        { name: "XuXue Feng", image: 'xuxuefeng.png' }
    ];

    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

    const customerService = new CustomerService();
    const [fetchList, setFetchList] = useState(false);
    useEffect(() => {


        customerService.getAllCustomer()
            .then(res => {
                // alert(JSON.stringify(res.data))
                setCustomers(res.data)
                setLoading(false)

            }).catch(err => {
                alert(err)
            })
    }
        , [fetchList]); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data) => {
        return [...data || []].map(d => {
            d.date = new Date(d.date);
            return d;
        });
    }

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }


    const downloadExcel = (data) => {

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
        //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
        XLSX.writeFile(workbook, `${uuid()}.xlsx`);

    }


    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                {/* <h5 className="m-0">Customers</h5> */}
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText style={{ width: 500 }} value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search by Name or Email or Auth Method" />
                    <ButtonGroup  >
                        {/* <Button style={{ background: 'dodgerblue' }}>Export to CSV</Button> */}
                        {/* <Button style={{ background: 'green' }}
                            onClick={() => {
                                downloadExcel(customers)
                            }}
                        >Export to Excel</Button> */}
                        <div  >

                         <JsonToExcel
        title="Export to Excel"
        data={customers}
        fileName="Customers Data"
        />
        </div>
                    </ButtonGroup>
                </span>
            </div>
        )
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;
        return (
            <React.Fragment>
                <img alt={representative.name} src={`images/avatar/${representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{representative.name}</span>
            </React.Fragment>
        );
    }

    const representativeFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <div className="mb-3 font-bold">Agent Picker</div>
                <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
            </React.Fragment>
        );
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={`images/avatar/${option.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    }

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
    }

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    }

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    }

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const statusItemTemplate = (option) => {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
    }

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false}></ProgressBar>;
    }

    const activityFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        )
    }

    const representativeRowFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterApplyCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" maxSelectedLabels={1} />;
    }

    const statusRowFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const actionBodyTemplate = () => {
        return <Button type="button" icon="pi pi-cog"></Button>;
    }

    const header = renderHeader();


    return (
        <div className="datatable-doc-demo" >
            <Toast ref={toast} />
            <div className="card">
                <DataTable

                    value={customers} paginator className="p-datatable-customers" header={header} rows={50}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10, 25, 50]}
                    dataKey="id" rowHover
                    selection={selectedCustomers}
                    onSelectionChange={e => setSelectedCustomers(e.value)}
                    filters={filters}
                    filterDisplay="menu"
                    loading={loading}
                    responsiveLayout="scroll"
                    globalFilterFields={['name', 'email', 'authType']}
                    emptyMessage="No customers found."
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                    {/* <Column selectionMode="single" selectionAriaLabel="name" headerStyle={{ width: '3em' }}></Column> */}
                    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                    <Column field="email" header="Email" sortable filterField="email" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country" />
                    <Column field="mobile" header="Mobile No." sortable filterField="email" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country" />
                    {/* <Column field="admin" header="ADMIN" sortable filterField="admin" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country" /> */}
                    <Column field="authType" header="AUTH METHOD" sortable filterField="authType" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country" />

                    <Column field="resumes" header="CV COUNT" sortable filterField="resumes.length" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country"
                        body={e =>
                            <Text color={'blue.500'} fontSize='sm' fontWeight='700'>
                                {e.resumes.length}
                            </Text>
                        }
                    />
                    {/* <Column field="authType" header="AUTH METHOD" sortable filterField="authType" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country" /> */}
                    <Column
                        field="active"
                        body={e => {
                            if (e.active)
                                return <div style={{ display: 'flex' }}><Icon
                                    w='24px'
                                    h='24px'
                                    me='5px'
                                    color={
                                        "green.500"

                                    }
                                    as={

                                        MdCheckCircle

                                    }
                                />
                                    <Text color={'green.500'} fontSize='sm' fontWeight='700'>
                                        YES
                                    </Text>
                                </div>
                            else
                                return 'NO'
                        }}
                        header="ACTIVE" sortable filterField="active" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country" />





                    <Column field="createdAt" header="JOINED" sortable
                        filterField="createdAt"
                        body={e => dayjs(e.createdAt).format('DD/MM/YYYY  -  hh:mm A')}
                        style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country" />
                    <Column field="updatedAt"
                        body={e => dayjs(e.updatedAt).format('DD/MM/YYYY  -  hh:mm A')}
                        header="LAST UPDATED" sortable filterField="createdAt" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country" />



                    <Column field="is_subscribed" header="PLAN" sortable filterField="authType" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country"
                        body={e => {
                            if (!e.is_subscribed)
                                return <div style={{ display: 'flex' }}><Icon
                                    w='24px'
                                    h='24px'
                                    me='5px'
                                    color={
                                        "green.500"

                                    }
                                    as={

                                        MdCheckCircle

                                    }
                                />
                                    <Text color={'green.500'} fontSize='sm' fontWeight='700'>
                                        FREEMIUM
                                    </Text>
                                </div>
                            else
                                return <div style={{ display: 'flex' }}><Icon
                                    w='24px'
                                    h='24px'
                                    me='5px'
                                    color={
                                        "yellow.400"

                                    }
                                    as={

                                        MdCheckCircle

                                    }
                                />
                                    <Text color={'yellow.400'} fontSize='sm' fontWeight='700'>
                                        PREMIUM
                                        {/* {e?.premiumPlanName} */}
                                    </Text>
                                </div>
                        }}
                    />

                    <Column field="updatedAt" header="PLAN ACTIVATION" sortable filterField="createdAt" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country" />
                    <Column field="updatedAt" header="PLAN EXPIRY" sortable filterField="createdAt" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country" />


                    <Column field="createdAt" header="ACTIONS" sortable

                        filterField="createdAt"
                        body={(item) => <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 300 }}>
                            {/* <Button className="p-button p-component p-button-raised p-button-info p-button-text" >EDIT</Button> */}



                            <Button className="p-button p-component p-button-raised p-button-warning p-button-text"

                                onClick={() => {


                                    const cs = new CustomerService();
                                    cs.blockCustomer(item._id, item.is_blocked)
                                        .then(res => {
                                            toast.current.show({
                                                severity: 'warn', summary: `User ${item.is_blocked ? "Unblocked" : "Blocked"}`, detail:
                                                    `Selected User - ${item.name} has been ${item.is_blocked ? "Unblocked" : "Blocked"} successfully`,
                                                life: 3000
                                            });
                                            setFetchList(e => !e)
                                        })
                                        .catch(err => {
                                            toast.current.show({ severity: 'error', summary: 'Failure Message', detail: 'Operation failed to block selected user', life: 3000 });
                                            setFetchList(e => !e)
                                        })




                                }}
                            >
                                {item?.is_blocked == true ? "Tap to Unblock" : "Tap to Block"}
                            </Button>


                            <Button id='btx' className="p-button p-component p-button-raised p-button-danger p-button-text"

                                onClick={e => {

                                    const cs = new CustomerService();
                                    cs.deleteCustomer(item._id)
                                        .then(res => {
                                            toast.current.show({ severity: 'success', summary: 'Success Message', detail: 'Selected User has been deleted successfully', life: 3000 });
                                            setFetchList(e => !e)
                                        })
                                        .catch(err => {

                                        })
                                }}
                            >DELETE</Button>
                            {/* <ConfirmPopup visible={true} message="Are you sure you want to proceed?"
                                icon="pi pi-exclamation-triangle" acceptLabel='OK' /> */}
                        </div>}
                        style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country" />


                    <Column field="is_subscribed" header="IS_SUBSCRIBED" sortable filterField="authType" style={{ minWidth: '14rem' }} filter filterPlaceholder="Search by country"
                        body={e => {
                            if (e.is_subscribed)
                                return <div style={{ display: 'flex' }}><Icon
                                    w='24px'
                                    h='24px'
                                    me='5px'
                                    color={
                                        "green.500"

                                    }
                                    as={

                                        MdCheckCircle

                                    }
                                />
                                    <Text color={'green.500'} fontSize='sm' fontWeight='700'>
                                        YES
                                    </Text>
                                </div>
                            else
                                return <div style={{ display: 'flex' }}><Icon
                                    w='24px'
                                    h='24px'
                                    me='5px'
                                    color={
                                        "red.500"

                                    }
                                    as={

                                        MdCancel

                                    }
                                />
                                    <Text color={'red.500'} fontSize='sm' fontWeight='700'>
                                        NO
                                    </Text>
                                </div>
                        }}
                    />


                    {/* <Column header="Agent" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
                        filter filterElement={representativeFilterTemplate} />
                    <Column field="date" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '8rem' }} body={dateBodyTemplate}
                        filter filterElement={dateFilterTemplate} />
                    <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: '8rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                    <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '10rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                    <Column field="activity" header="Activity" sortable showFilterMatchModes={false} style={{ minWidth: '10rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                    <Column headerStyle={{ width: '4rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} /> */}
                </DataTable>
            </div>
        </div>
    );
}


export default CustomerTable;