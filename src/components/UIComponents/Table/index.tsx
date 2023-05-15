import './table.css';

interface Column {
    name: string;
    value: string;
}

interface TableProps<T> {
    rows: Array<T>;
    columns: Array<Column>;
    children?: Function;
}


function Table<T>({columns, rows, children}: TableProps<T>) {
    const renderRows = (index: number, column: Column, row: any) => {
        if (column.value === 'actions') {
            return children?.({row, index});
        } else {
            return <td key={index}>{row[column.value]}</td>;
        }
    }

    return (
            <table className={'styled-table'}>
                <thead>
                <tr>
                    {columns.map((col, index) => (
                            <td key={index}>{col.name}</td>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.map((row, index) => (
                        <tr className={index % 2 === 0 ? 'active-row' : ''} key={index}>
                            {columns.map((col, idx) => renderRows(idx, col, row))}
                        </tr>
                ))}
                </tbody>
            </table>
    );
}

export default Table;

