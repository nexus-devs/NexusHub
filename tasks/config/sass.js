module.exports = function(grunt) {

    grunt.config.set('sass', {
        dev: {
            files: [{
                expand: true,
                cwd: 'assets/styles/',
                src: ['importer.scss'],
                dest: '.tmp/public/css/',
                ext: '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};
