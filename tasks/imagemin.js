module.exports = function(opts) {
  return {
    dist: {
      files: [{
        expand: true,
        cwd: 'app/images',
        src: '{,*/}*.{png,jpg,jpeg,gif,mp4,wav}',
        dest: 'dist/images'
      }]
    }
  }
}
