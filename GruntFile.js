module.exports = function(grunt) {

    //Configuration
    grunt.initConfig({

        watch: {
            options: {livereload: true},
            sass: {
                files: ['scss/*.scss', 'scss/**/*scss'],
                tasks: ['sass']
            }
        },

        concat: {
            js: {
                src: [
                    'js/*.js',
                    'js/**/*.js'
                ],
                dest: 'buid/script.js'
            }
        },

        sass: {
            build: {
                files: [{
                    src: ['scss/*.scss', 'scss/**/*.scss'],
                    dest: 'css/main.css'
                }]
            }
        },

        express: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    bases: ['.'],
                    livereload: true
                }
            }
        }
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Register Tasks
    grunt.registerTask('run', ['concat', 'sass']);
    grunt.registerTask('server', ['watch', 'sass']);
};