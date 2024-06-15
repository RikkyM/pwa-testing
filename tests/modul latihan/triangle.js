const detectTriangle = (sideA, sideB, sideC) => {
  [sideA, sideB, sideC] = [sideA, sideB, sideC]
    .map((side) => {
      if (!Number.isInteger(side)) {
        throw new Error('Sides have to be Integer')
      }

      if (side < 1) {
        throw new Error('Strange Triangle')
      }

      return side
    })
    .sort()

  if (sideA + sideB <= sideC) {
    throw new Error('Triangle does not conform inequality principle')
  }

  if (sideA === sideB && sideA === sideC) {
    return 'Equilateral Triangle'
  }

  if (sideA === sideB || sideB === sideC) {
    return 'Isosceles Triangle'
  }

  return 'Scalene Triangle'
}

// eslint-disable-next-line no-undef
describe('Detect the triangle', () => {
  // eslint-disable-next-line no-undef
  it('Should fail if the sides are less than 1', () => {
    // eslint-disable-next-line no-undef
    expect(() => detectTriangle(-1, 2, 2)).toThrowError('Strange Triangle')
    // eslint-disable-next-line no-undef
    expect(() => detectTriangle(1, -2, 2)).toThrowError('Strange Triangle')
    // eslint-disable-next-line no-undef
    expect(() => detectTriangle(1, 2, -2)).toThrowError('Strange Triangle')
  })

  // eslint-disable-next-line no-undef
  it('Should fail if the sides are not integer', () => {
    // eslint-disable-next-line no-undef
    expect(() => detectTriangle('a', 2, 2)).toThrowError(
      'Sides have to be Integer'
    )
    // eslint-disable-next-line no-undef
    expect(() => detectTriangle(1, 'a', 2)).toThrowError(
      'Sides have to be Integer'
    )
    // eslint-disable-next-line no-undef
    expect(() => detectTriangle(1, 2, 'a')).toThrowError(
      'Sides have to be Integer'
    )

    // eslint-disable-next-line no-undef
    expect(() => detectTriangle(' ', 2, 2)).toThrowError(
      'Sides have to be Integer'
    )
  })

  // eslint-disable-next-line no-undef
  it('Should detect Equilateral Triangle if all sides are equal', () => {
    // eslint-disable-next-line no-undef
    expect(detectTriangle(1, 1, 1)).toEqual('Equilateral Triangle')
    // eslint-disable-next-line no-undef
    expect(detectTriangle(1, 2, 2)).not.toEqual('Equilateral Triangle')
  })

  // eslint-disable-next-line no-undef
  it('Should detect Isosceles Triangle if only two sides are equal', () => {
    // eslint-disable-next-line no-undef
    expect(detectTriangle(2, 2, 3)).toEqual('Isosceles Triangle')
    // eslint-disable-next-line no-undef
    expect(detectTriangle(4, 2, 4)).toEqual('Isosceles Triangle')
    // eslint-disable-next-line no-undef
    expect(detectTriangle(1, 2, 2)).toEqual('Isosceles Triangle')

    // eslint-disable-next-line no-undef
    expect(detectTriangle(4, 1, 4)).toEqual('Isosceles Triangle')
  })

  // eslint-disable-next-line no-undef
  it('Should detect Scalene Triangle if no sides are the same', () => {
    // eslint-disable-next-line no-undef
    expect(detectTriangle(2, 4, 3)).toEqual('Scalene Triangle')
  })

  // eslint-disable-next-line no-undef
  it('Should detect inequality problem', () => {
    // eslint-disable-next-line no-undef
    expect(() => detectTriangle(4, 1, 2)).toThrowError(
      'Triangle does not conform inequality principle'
    )
    // eslint-disable-next-line no-undef
    expect(() => detectTriangle(5, 1, 3)).toThrowError(
      'Triangle does not conform inequality principle'
    )
  })
})
