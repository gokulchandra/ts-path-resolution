import * as personRepository from '@/repositories/person'
import { findById, getAllPersons } from '@/services/person'

describe('findById', () => {
    const spy = jest.spyOn(personRepository, 'getById')
    it('should pass the id to repository function', () => {
        const id = 1
        findById(id)
        expect(spy).toHaveBeenCalledWith(id)
    })
})

describe('getAllPersons', () => {
    const spy = jest.spyOn(personRepository, 'list')
    it('should pass the id to repository function', () => {
        getAllPersons()
        expect(spy).toHaveBeenCalled()
    })
})