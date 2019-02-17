import { persons } from 'database'

export const getById = (id: number): Person => {
    return persons[id]
}

export const list = (): Person[] => {
    return Object.keys(persons).map((k: string) => persons[k])
}

export interface Person {
    id: number
    name: string
    age: number
}