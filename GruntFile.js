module.exports = function(grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        jshint : {
            myFiles : ['./Server/<strong>/*.js','./Routes/</strong>/*.js']
        },
        nodemon : {
            script : './bin/www'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['jshint','nodemon']);
};
