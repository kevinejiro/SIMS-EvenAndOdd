import chai from 'chai';

const { expect } = chai;

describe("evenAndOdd", () => {
  
  describe("Handles invalid input", () => {
    it('should return invalid argument for an object', () => {
      expect(evenAndOdd({})).to.equal('invalid argument');
    });
    it('should return invalid argument for a string', () => {
      expect(evenAndOdd("hello world")).to.equal('invalid argument');
    }); 
    it('should return invalid argument for an integer', () => {
      expect(evenAndOdd(23)).to.equal('invalid argument');
    });    
  });
  
  describe("Handles valid input", () => {
    it('should return type object for [1,2,3,4]', () => {
      expect(evenAndOdd([1, 2, 3, 4])).to.be.an('object');
    });
    it('should have property even for [1,2,3,4]', () => {
      expect(evenAndOdd([1, 2, 3, 4])).to.have.a.property('even');
    });
    it('should have property odd for [1,2,3,4]', () => {
      expect(evenAndOdd([1, 2, 3, 4])).to.have.a.property('odd');
    });
    it('should have both even and odd property for [1,2,3,4]', () => {
      expect(evenAndOdd([1, 2, 3, 4])).to.have.all.keys('even', 'odd');
    });
    it('should return `{ even: [2, 4], odd: [1, 3] }` for [1,2,3,4]', () => {
      expect(evenAndOdd([1, 2, 3, 4])).to.deep.equal({ even: [2, 4], odd: [1, 3] });
    });
    it('should return `{ even: [4,6], odd: [] }` for [4,6]', () => {
      expect(evenAndOdd([4,6])).to.deep.equal({ even: [4,6], odd: [] });
    });     
  });
  
});

