import { getById, list } from '@/repositories/person'
import { persons } from 'database'

describe('getById', () => {
    it('should return person for given id', () => {
        const id = 1
        const person = getById(1)
        expect(person).toBeDefined()
    })
})

describe('list', () => {
    it('should return all persons', () => {
        const actual = list()
        const expected = Object.keys(persons).length
        expect(actual.length).toBe(expected)
    })
})