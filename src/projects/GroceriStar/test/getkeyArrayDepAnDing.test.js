const groceristar = require('../groceristar.js')
  
describe('getKeyArrayDepending method', () => {
    
const result = groceristar.getKeyArrayDepAndIng()
    
  test('testing the method returns an array', () => {
        
    expect(Array.isArray(result)).toBe(true)
     
   })

  test('testing the returned array is not empty',() => {

    expect(result).not.toBe('')

   }) 
})
    
