const { romanToNumber, numberToRoman } = require('../src/roman-number.js')
const { expect } = require('chai')

describe('roman-to-number', () => {
  it('should do when', () => {
    expect(romanToNumber('IV')).to.be.equal(4)
  })

  it('should do when', () => {
    expect(romanToNumber('IX')).to.be.equal(9)
  })

  it('should do when', () => {
    expect(romanToNumber('XL')).to.be.equal(40)
  })

  it('should do when', () => {
    expect(romanToNumber('XC')).to.be.equal(90)
  })

  it('should do when', () => {
    expect(romanToNumber('CM')).to.be.equal(900)
  })

  it('should do when', () => {
    expect(romanToNumber('I')).to.be.equal(1)
  })

  it('should do when', () => {
    expect(romanToNumber('II')).to.be.equal(2)
  })

  it('should do when', () => {
    expect(romanToNumber('III')).to.be.equal(3)
  })

  it('should do when', () => {
    expect(romanToNumber('V')).to.be.equal(5)
  })

  it('should do when', () => {
    expect(romanToNumber('VI')).to.be.equal(6)
  })

  it('should do when', () => {
    expect(romanToNumber('VII')).to.be.equal(7)
  })

  it('should do when', () => {
    expect(romanToNumber('VIII')).to.be.equal(8)
  })

  it('should do when', () => {
    expect(romanToNumber('X')).to.be.equal(10)
  })

  it('should do when', () => {
    expect(romanToNumber('XI')).to.be.equal(11)
  })

  it('should do when', () => {
    expect(romanToNumber('XII')).to.be.equal(12)
  })

  it('should do when', () => {
    expect(romanToNumber('XIII')).to.be.equal(13)
  })

  it('should do when', () => {
    expect(romanToNumber('XIV')).to.be.equal(14)
  })

  it('should do when', () => {
    expect(romanToNumber('XV')).to.be.equal(15)
  })

  it('should do when', () => {
    expect(romanToNumber('XVI')).to.be.equal(16)
  })

  it('should do when', () => {
    expect(romanToNumber('XVII')).to.be.equal(17)
  })

  it('should do when', () => {
    expect(romanToNumber('XVIII')).to.be.equal(18)
  })

  it('should do when', () => {
    expect(romanToNumber('XIX')).to.be.equal(19)
  })

  it('should do when', () => {
    expect(romanToNumber('XX')).to.be.equal(20)
  })

  it('should do when', () => {
    expect(romanToNumber('XCVIII')).to.be.equal(98)
  })

  it('should do when', () => {
    expect(romanToNumber('CMLXXXVIII')).to.be.equal(988)
  })

  it('should do when', () => {
    expect(romanToNumber('DXXIII')).to.be.equal(523)
  })

  it('should do when', () => {
    expect(romanToNumber('MCCCXXI')).to.be.equal(1321)
  })
})

describe('number-to-roman', () => {
  it('should do when', () => {
    expect(numberToRoman(1)).to.be.equal('I')
  })

  it('should do when', () => {
    expect(numberToRoman(2)).to.be.equal('II')
  })

  it('should do when', () => {
    expect(numberToRoman(3)).to.be.equal('III')
  })

  it('should do when', () => {
    expect(numberToRoman(4)).to.be.equal('IV')
  })

  it('should do when', () => {
    expect(numberToRoman(5)).to.be.equal('V')
  })

  it('should do when', () => {
    expect(numberToRoman(6)).to.be.equal('VI')
  })

  it('should do when', () => {
    expect(numberToRoman(7)).to.be.equal('VII')
  })

  it('should do when', () => {
    expect(numberToRoman(8)).to.be.equal('VIII')
  })

  it('should do when', () => {
    expect(numberToRoman(9)).to.be.equal('IX')
  })

  it('should do when', () => {
    expect(numberToRoman(10)).to.be.equal('X')
  })

  it('should do when', () => {
    expect(numberToRoman(20)).to.be.equal('XX')
  })

  it('should do when', () => {
    expect(numberToRoman(30)).to.be.equal('XXX')
  })

  it('should do when', () => {
    expect(numberToRoman(40)).to.be.equal('XL')
  })

  it('should do when', () => {
    expect(numberToRoman(50)).to.be.equal('L')
  })

  it('should do when', () => {
    expect(numberToRoman(60)).to.be.equal('LX')
  })

  it('should do when', () => {
    expect(numberToRoman(70)).to.be.equal('LXX')
  })

  it('should do when', () => {
    expect(numberToRoman(80)).to.be.equal('LXXX')
  })

  it('should do when', () => {
    expect(numberToRoman(90)).to.be.equal('XC')
  })

  it('should do when', () => {
    expect(numberToRoman(100)).to.be.equal('C')
  })

  it('should do when', () => {
    expect(numberToRoman(11)).to.be.equal('XI')
  })

  it('should do when', () => {
    expect(numberToRoman(12)).to.be.equal('XII')
  })

  it('should do when', () => {
    expect(numberToRoman(13)).to.be.equal('XIII')
  })

  it('should do when', () => {
    expect(numberToRoman(14)).to.be.equal('XIV')
  })

  it('should do when', () => {
    expect(numberToRoman(15)).to.be.equal('XV')
  })

  it('should do when', () => {
    expect(numberToRoman(16)).to.be.equal('XVI')
  })

  it('should do when', () => {
    expect(numberToRoman(17)).to.be.equal('XVII')
  })

  it('should do when', () => {
    expect(numberToRoman(18)).to.be.equal('XVIII')
  })

  it('should do when', () => {
    expect(numberToRoman(19)).to.be.equal('XIX')
  })

  it('should do when', () => {
    expect(numberToRoman(33)).to.be.equal('XXXIII')
  })

  it('should do when', () => {
    expect(numberToRoman(578)).to.be.equal('DLXXVIII')
  })

  it('should do when', () => {
    expect(numberToRoman(629)).to.be.equal('DCXXIX')
  })

  it('should do when', () => {
    expect(numberToRoman(1087)).to.be.equal('MLXXXVII')
  })
})
