module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/hellovue/'
    : '/' ,
    outputDir : 'dist'
}