const sum = (a, b) => a + b

window.describe('A Sample Test for Sum', () => {
  window.it('should return a + b value', () => {
    window.expect(sum(2, 3)).toEqual(5)
  })
})
