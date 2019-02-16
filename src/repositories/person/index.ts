import { db } from '@/lib/database'

export const getById = (id: number): Person => {
    return db[id]
}

export const list = (): Person[] => {
    return Object.keys(db).map((k: string) => db[k])
}

export interface Person {
    id: number
    name: string
    age: number
}