const db = {
  1: { id: 1, name: 'tobi', age: 12 },
  2: { id: 2,  name: 'loki', age: 25 },
  3: { id: 3, name: 'jane', age: 36 }
};

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