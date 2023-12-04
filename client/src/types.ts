export interface IUser {
    id: number
    email: string
    password: string
    role: string
}

export interface IDevice {
    id: number
    name: string
    price: number
    rating: number // не реализовано
    img?: string
    info?: []
    reviews?: IReview[] // не реализовано
    isFavorite?: boolean // не реализовано
}

export interface IReview {
    id: number
    idUser: IUser["id"]
    idDevice: IDevice["id"]
    text: string
}

// export interface IDeviceInfo {
//     id: number
//     title: string
//     description: string
// }

export interface IType {
    id: number
    name: string
}

interface IBrand {
    id: number
    name: string
}

interface ITypeBrand {
    id: number
}

interface IRating {
    id: number
    rate: string
}

interface IBasket {
    id: number
}

interface IBasketDevice {
    id: number
}
