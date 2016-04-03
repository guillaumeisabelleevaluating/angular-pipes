import { HeadPipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('HeadPipe', () => {
    
    let pipe: HeadPipe;
    
    beforeEach(() => {
       pipe = new HeadPipe(); 
    });
    
    it('Should return the first element', () => {
       
       const values = [1, 2, 3, 4];
       
       expect(pipe.transform(values)).toEqual(1); 
    });
    
    it('Should return the first element #2', () => {
       
       expect(pipe.transform([1])).toEqual(1); 
    });
    
    it('Should return undefined', () => {
       
       expect(pipe.transform([])).toEqual(undefined); 
    });
    
    it('Should throw an error', () => {
        
        expect(() => { 
            pipe.transform(123)
        }).toThrowError(TypeError);
    })
    
})