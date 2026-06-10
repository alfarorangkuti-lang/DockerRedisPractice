export type StockParentChild = {
        memory?: String,
        dgi_price?: number,
        created_at?: String,
    }

export type StockParentHead = {
        name: String,
        variants: StockParentChild[]
    }


export type StockParents = {
        id:number,
        name:string,
        memory:string,
        dgi_price:number,
        created_at:string
}