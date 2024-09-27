export interface MockData {
    id: number,
    name: string,
    email: string,
    age: number,
    phone: string,
    access: string
}

export interface MockBarData {
    country: string;
    "hot dog": number;
    "hot dogColor": string;
    burger: number;
    burgerColor: string;
    kebab: number;
    kebabColor: string;
    donut: number;
    donutColor: string;
}

export interface MockTransaction {
    txId: string;
    user: string;
    date: string;
    cost: string;
}

export interface Invoice {
    id: number;
    name: string;
    email: string;
    cost: number;
    phone: string;
    date: string;
}

export interface MockPieData {
    id: string;
    label: string;
    value: number;
    color: any
}

export interface MockLineData {
    id: string;
    color: string;
    data: MockLineDataCoordinate[];
}

export interface MockLineDataCoordinate {
    x: "string";
    y: number;
}

export interface MockDataGeoFeature {
    id:number;
    color:string;
    data:MockLineDataCoordinate[]
}

export interface MockGeographyData {
    id:string;
    value:string;
}