import './App.css'
import Table from './components/UIComponents/Table'
import Fetcher, {FetcherResponse} from "./components/UIComponents/Fetcher";

interface Item {
    email: string;
    firstname: string;
    middlename: string;
    lastname: string;
    username: string
}

const columns = [
    {
        value: 'email',
        name: 'Email'
    }, {
        value: 'firstname',
        name: 'First Name'
    },
    {
        value: 'middlename',
        name: 'Middle Name'
    },
    {
        value: 'lastname',
        name: 'Last Name'
    },
    {
        value: 'username',
        name: 'Username'
    }, {
        value: 'actions',
        name: 'Actions'
    }
];

const productColumns = [{
    name: 'Title',
    value: 'title',
}, {
    name: 'Price',
    value: 'price',
}, {
    name: 'Discount %',
    value: 'discountPercentage',
}, {
    name: 'Rating',
    value: 'rating',
}, {
    name: 'Brand',
    value: 'brand',
}, {
    name: 'Category',
    value: 'category',
}
];

const items: Item[] = [
    {
        email: 'miltonisaiah@gmail.com',
        firstname: 'Milton',
        lastname: 'Kaizer',
        middlename: 'Isaya',
        username: 'miltonisaya'
    },
    {
        email: 'zachariahn@gmail.com',
        firstname: 'Zach',
        lastname: 'Ngonyani',
        middlename: 'Mtabe',
        username: 'zechtz'
    },
    {
        email: 'hibamsi@gmail.com',
        firstname: 'Haji',
        lastname: 'Bamsi',
        middlename: 'Iddi',
        username: 'hibamsi'
    }
];

interface RowProps {
    row: Item;
    index: number;
}

function App() {
    const handleEdit = (row: Item) => {
        console.log(row);
    }

    const handleDelete = (row: Item) => {
        console.log(row);
    }

    return (
            <>
                <Fetcher api={'/products?limit=5'} render={({response, isLoading}: FetcherResponse) => (
                        isLoading ? (<span>Loading products</span>) : (
                                <Table columns={productColumns} rows={response.products}>
                                    {({row, index}: RowProps) => (
                                            <td key={index}>
                                                <button onClick={() => handleEdit(row)}>Edit</button>
                                                <button onClick={() => handleDelete(row)}>Delete</button>
                                            </td>
                                    )}
                                </Table>
                        )
                )}/>
            </>
    )
}

export default App
