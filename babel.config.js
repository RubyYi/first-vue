module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'element-ui',
      styleLibraryName: "theme-chalk",
      libraryDirectory: 'es',
      style: true
    }, 'element-ui']
  ]
}
