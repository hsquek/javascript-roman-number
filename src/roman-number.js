const dictionaryRTN = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

const dictionaryNTR = [
  { roman: 'I', arabic: 1 },
  { roman: 'V', arabic: 5 },
  { roman: 'X', arabic: 10 },
  { roman: 'L', arabic: 50 },
  { roman: 'C', arabic: 100 },
  { roman: 'D', arabic: 500 },
  { roman: 'M', arabic: 1000 }
]
const romanToNumber = (r) => {
  // convert string into array of substrings
  var romanDigits = splitRoman(r).reverse()

  var n = romanDigits.reduce(function (acc, ele) {
    if (ele.length === 2 && dictionaryRTN[ele[1]] > dictionaryRTN[ele[0]]) {
      // if 4 and 9, remember to subtract the preceding number
      acc += dictionaryRTN[ele[1]] - dictionaryRTN[ele[0]]
    } else {
      // add everything else
      ele.split('').forEach(function (letter) {
        acc += dictionaryRTN[letter]
      })
    }
    return acc
  }, 0)

  function splitRoman (str) {
    // split a roman numeral into 1s, 10s, 100s ...
    var s = ''
    var substrings = []
    for (var i = 0; i < str.length; i++) {
      s += str[i]

      if (i !== str.length - 1 && dictionaryRTN[str[i]] > dictionaryRTN[str[i + 1]]) {
        substrings.push(s)
        s = ''
      }
    }
    substrings.push(s)
    return substrings
  }

  return n
}

const numberToRoman = (n) => {
  var roman = ''

  var digits = n.toString().split('').reverse()

  digits.forEach(function (digit, index) {
    roman = convert(+digit, 2 * index + 2) + roman
  })

  function convert (n, idx) {
    var substring = ''
    if (n === 4) {
      substring += dictionaryNTR[idx - 2].roman + dictionaryNTR[idx - 1].roman
    } else if (n === 9) {
      substring += dictionaryNTR[idx - 2].roman + dictionaryNTR[idx].roman
    } else if (n === 5) {
      substring += dictionaryNTR[idx - 1].roman
    } else {
      if (n > 5) {
        substring += dictionaryNTR[idx - 1].roman
        n -= 5
      }

      for (var i = 0; i < n; i++) {
        substring += dictionaryNTR[idx - 2].roman
      }
    }
    return substring
  }

  return roman
}

module.exports = {
  romanToNumber,
  numberToRoman
}
