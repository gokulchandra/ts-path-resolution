import { Person, getById, list } from '@/repositories/person'

export const findById = (id: number): Person => {
    //Some business logic
    return getById(id)
}


export const getAllPersons = (): Person[] => {
    //Some business logic
    return list()
}