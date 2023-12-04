export interface IDevice {
    id: number
    name: string
    price: number
    rating: number, // не реализовано
    typeId: number,
    brandId: number,
    img?: string
    // info?: IProductInfo[]
    isFavorite?: boolean // не реализовано
    // reviews?: IReview[] // не реализовано
}

export interface IProductInfo {
    id: number
    title: string
    description: string
}

export interface IType {
    id: number
    name: string
}

export interface IBrand {
    id: number
    name: string
    createdAt: string
    updatedAt: string
}

// interface ITypeBrand {
//     id: number
// }

// interface IRating {
//     id: number
//     rate: string
// }
