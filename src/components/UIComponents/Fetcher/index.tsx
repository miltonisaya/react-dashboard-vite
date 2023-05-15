import axios from "../../../config/axios.ts";
import {AxiosResponse} from "axios";
import React from "react";

interface FetcherProps {
    api: string,
    render: Function
}

export interface FetcherResponse {
    isLoading: boolean;
    response: Record<string, any> | Array<Record<string, any>>;
}

const RESPONSE: FetcherResponse = {
    isLoading: false,
    response: {} || []
}

const Fetcher: React.FC<FetcherProps> = ({api, render}) => {
    const [response, setResponse] = React.useState<FetcherResponse>(RESPONSE);

    React.useEffect(() => {
        fetchData().catch(error => console.log(error));
    }, [api])

    const fetchData = async () => {
        setResponse((prevState) => ({
            ...prevState,
            isLoading: true
        }))
        const res: AxiosResponse = await axios.get(api)

        setResponse((prevState) => ({
            ...prevState,
            isLoading: false,
            response: res.data
        }))
    }
    return (
            <div>{render(response)}</div>
    );
}

export default Fetcher;