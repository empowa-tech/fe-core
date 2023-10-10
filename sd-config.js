const StyleDictionary = require('style-dictionary')

/**
 * Helper: Transforms letter spacing % to em
 */
function transformPercentagesToRem(value) {
  if (value.endsWith('%')) {
    const percentValue = value.slice(0, -1)
    return percentValue / 100 + 'em'
  }

  return value
}

/**
 * Helper: Transforms dimensions to rem
 */
function transformPixelsToRem(value) {
  if (value.endsWith('rem')) {
    return value
  }

  return (1 / 16) * value + 'rem'
}

/**
 * Helper: Transforms JSON object to normal object
 */
function transformFontWeightStringToNumber(value) {
  switch (value) {
    case 'Light':
      return 200
    case 'Regular':
      return 400
    case 'Medium':
      return 500
    case 'SemiBold':
      return 600
    case 'Bold':
      return 700
    default:
      return 400
  }
}

/**
 * Transform letterSpacing to em
 */
StyleDictionary.registerTransform({
  name: 'size/percentageToRem',
  type: 'value',
  transitive: true,
  matcher: (token) => ['letterSpacing', 'lineHeight'].includes(token.type),
  transformer: (token) => transformPercentagesToRem(token.value),
})

StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  transitive: true,
  matcher: (token) => ['fontSizes', 'lineHeight', 'borderRadius', 'spacing'].includes(token.type),
  transformer: (token) => transformPixelsToRem(token.value),
})

StyleDictionary.registerTransform({
  name: 'size/fontWeightStringToNumber',
  type: 'value',
  transitive: true,
  matcher: (token) => ['fontWeights'].includes(token.type),
  transformer: (token) => transformFontWeightStringToNumber(token.value),
})

module.exports = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    ts: {
      transforms: [
        'attribute/cti',
        'name/cti/pascal',
        'color/hex',
        'size/percentageToRem',
        'size/pxToRem',
        'size/fontWeightStringToNumber',
      ],
      buildPath: 'dist/js/',
      files: [
        {
          format: 'javascript/es6',
          destination: 'index.ts',
        },
        {
          format: 'typescript/es6-declarations',
          destination: 'index.d.ts',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
}
