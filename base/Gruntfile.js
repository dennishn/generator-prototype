// Generated on 2013-11-23 using generator-webapp 0.4.4
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
            ip: '192.168.1.10'
        },
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/scss/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= yeoman.app %>/css/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '<%= yeoman.ip %>'
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>',
                    livereload: false
                }
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/scss',
                cssDir: '<%= yeoman.app %>/.tmp/css',
                generatedImagesDir: '<%= yeoman.app %>/.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/.tmp/css/',
                    src: '{,*/}*.css',
                    dest: '<%= yeoman.app %>/.tmp/css/'
                }]
            }
        },
        browser_sync: {
            files: {
                src: [
                    '<%= yeoman.app %>/.tmp/css/*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}',
                    '{<%= yeoman.app %>/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/*.html'
                ]
            },
            options: {
                host: '<%= yeoman.ip %>',
                watchTask: true,
                server: {
                    baseDir: '<%= yeoman.app %>'
                },
                ghostMode: {
                    scroll: true,
                    links: true,
                    forms: true
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.app %>/.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '<%= yeoman.app %>/.tmp'
        },
        'bower-install': {
            app: {
                html: '<%= yeoman.app %>/index.html',
                ignorePath: '<%= yeoman.app %>/'
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '*.html',
                        'images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}',
                        'fonts/{,*/}*.*',
                        'css/*.css',
                        'scripts/{,*/}*.js',
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/.tmp/css',
                dest: '<%= yeoman.app %>/css/',
                src: '{,*/}*.css'
            }
        },
        modernizr: {
            devFile: '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
            outputFile: '<%= yeoman.dist %>/bower_components/modernizr/modernizr.js',
            files: [
                '<%= yeoman.dist %>/scripts/{,*/}*.js',
                '<%= yeoman.dist %>/css/{,*/}*.css',
                '!<%= yeoman.dist %>/scripts/vendor/*'
            ],
            uglify: true
        },
        concurrent: {
            server: [
                'compass',
                'copy:styles'
            ],
            dist: [
                'compass',
            ]
        }
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'browser_sync',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
      grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
      grunt.task.run(['serve']);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'autoprefixer',
        'modernizr',
        'copy:styles',
        'copy:dist',
    ]);

    grunt.registerTask('default', [
        'serve'
    ]);
};
