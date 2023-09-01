module.exports = function toReadable (number) {
    const ones = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
      ];
    
      const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
      ];
    
      if (number < 20) {
        return ones[number];
      }
    
      if (number < 100) {
        return tens[Math.floor(number / 10)] + (number % 10 === 0 ? '' : ' ' + ones[number % 10]);
      }
    
      if (number < 1000) {
        let res = +String(number).slice(-2)
        if (res > 19) {
            res2 = tens[Math.floor(res / 10)] + (res % 10 === 0 ? '' : ' ' + ones[res % 10])
        } else res2 = ones[res]
        return ones[Math.floor(number / 100)] + ' hundred' + (number % 100 === 0 ? '' : ' ' + res2);
}
}
