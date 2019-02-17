import { getById, list } from '@/repositories/person'
import { db } from '@/lib/database'

describe('getById', () => {
    it('should return person for given id', () => {
        const id = 1
        const person = getById(1)
        expect(person).toBeDefined()
    })
})

describe('list', () => {
    it('should return all persons', () => {
        const persons = list()
        const expected = Object.keys(db).length
        expect(persons.length).toBe(expected)
    })
})