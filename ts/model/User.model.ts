import {CarModel} from "./Car.model";

export interface UserModel {
    name: string,
    age: number,
    car: CarModel,
    role_id: number,
    created_at: string,
    avatar: string
}
