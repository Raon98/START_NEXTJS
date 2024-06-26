export type Invoice = {
    id: string;
    customer : string;
    amount : number;
    date : string;
    status: 'pending' | 'paid';
}