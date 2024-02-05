/**
 * @jest-environment jsdom
 */

const validateDomContent = require('./domContentValidator')

describe('DOM Content Validation Tests', () => {
  beforeAll(() => {
    document.body.innerHTML = `<div id="testElement">Expected Content</div>`
  })

  test('Validates existing element with correct content', () => {
    expect(validateDomContent('#testElement', 'Expected Content')).toBe(true)
  })

  test('Rejects when element does not exist', () => {
    expect(validateDomContent('#nonExistent', 'Content')).toBe(false)
  })

  test('Rejects when content does not match', () => {
    expect(validateDomContent('#testElement', 'Incorrect Content')).toBe(false)
  })
})
