import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.js',

  output: {
    file: './dist/canvas-booster.js',
    format: 'umd',
    name: 'canvasBooster'
  },
  
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}