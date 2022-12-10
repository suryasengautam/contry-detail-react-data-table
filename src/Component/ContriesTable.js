import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';

function ContriesTable() {
    const [contries, setContries] = useState([])
    const getContries = async () => {
        try {
            const res = await axios.get('https://restcountries.com/v2/all')
            console.log(res);
            setContries(res.data)

        }
        catch (err) {

        }
    }
    const columns = [
        {
            name: 'Contry Name',
            selector: (row) => row.name,
            // sortable : true
        },
        {
            name: 'Contry Native Nzme',
            selector: (row) => row.nativeName
        },
        {
            name: 'Contry Capital',
            selector: (row) => row.capital
        },
        {
            name: 'Contry Flag',
            selector: (row) => <img src={row.flag} width={50} height={50} loading="lazy" />

        },
    ]
    useEffect(() => {
        getContries()
    }, [])

    return (
        <>
            <
                DataTable
                title="Contry List"
                columns={columns}
                data={contries}
                responsive={true}
                pagination
                fixedHeader
                selectableRows
                selectableRowsHighlight
                highlightOnHover

                actions={<button>export</button>}
            />
        </>
    )
}

export default ContriesTable