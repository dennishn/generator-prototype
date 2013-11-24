// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // configurable paths
        yeoman: {
            app: 'app',
            dist: 'dist',
            ip: '<%= ipAdress %>'
        },
        watch: {
            compass: {
                files: ['<%%= yeoman.app %>/scss/**/*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%%= yeoman.app %>/css/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
            scripts: {
                files: ['<%%= yeoman.app %>/scripts/**/*.js']
            },
            livereload: {
                options: {
                    livereload: '<%%= connect.options.livereload %>'
                },
                files: [
                    '<%%= yeoman.app %>/*.html',
                    '<%%= yeoman.app %>/.tmp/css/{,*/}*.css',
                    '<%%= yeoman.app %>/scripts/{,*/}*.js',
                    '<%%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: '<%%= yeoman.ip %>'
            }
        },
        compass: {
            options: {
                sassDir: '<%%= yeoman.app %>/scss',
                cssDir: '<%%= yeoman.app %>/.tmp/css',
                generatedImagesDir: '<%%= yeoman.app %>/.tmp/images/generated',
                imagesDir: '<%%= yeoman.app %>/images',
                javascriptsDir: '<%%= yeoman.app %>/scripts',
                fontsDir: '<%%= yeoman.app %>/fonts',
                importPath: '<%%= yeoman.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.app %>/.tmp/css/',
                    src: '{,*/}*.css',
                    dest: '<%%= yeoman.app %>/.tmp/css/'
                }]
            }
        },
        browser_sync: {
            files: {
                src: [
                    '<%%= yeoman.app %>/.tmp/css/*.css',
                    '<%%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}',
                    '<%%= yeoman.app %>/scripts/{,*/}*.js',
                    '<%%= yeoman.app %>/*.html'
                ]
            },
            options: {
                host: '<%%= yeoman.ip %>',
                watchTask: true,
                server: {
                    baseDir: '<%%= yeoman.app %>'
                },
                ghostMode: {
                    scroll: true,
                    links: true,
                    forms: true
                }
            }
        },
        clean: {
            server: '<%%= yeoman.app %>/.tmp'
        },
        'bower-install': {
            app: {
                html: '<%%= yeoman.app %>/index.html',
                ignorePath: '<%%= yeoman.app %>/'
            }
        },
        copy: {
            styles: {
                expand: true,
                dot: true,
                cwd: '<%%= yeoman.app %>/.tmp/css',
                dest: '<%%= yeoman.app %>/css/',
                src: '{,*/}*.css'
            }
        },
        concurrent: {
            server: [
                'compass',
                'copy:styles'
            ]
        }
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('browser-sync', [
        'browser_sync',
        'watch'
    ]);

    grunt.registerTask('server', function () {
      grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
      grunt.task.run(['serve']);
    });

    grunt.registerTask('default', [
        'serve'
    ]);
};
