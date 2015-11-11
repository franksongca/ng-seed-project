module.exports = function (grunt) {
    var version = grunt.option('release') || '';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['pkg', 'component'],

                commit: true,
                commitMessage: 'Jenkins release build v%VERSION%',
                commitFiles: ['package.json'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                pushTo: 'origin release/v1.0',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: false,
                regExp: false
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            unit: {
                singleRun: true
            }
        },


        // The actual grunt server settings
        connect: {
            options: {
                port: 9002,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost'
            }
        },


        wiredep: {
            task: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: ['ngseed/index.html']
            }
        },
        less: {
            options: {
                paths: [
                    'ngseed/bower_components',
                    'ngseed/app'
                ]
            },
            server: {
                files: {
                    'ngseed/app/app.css': 'ngseed/app/app.less'
                }
            }
        },
        shell: {
            options: {
                stderr: true
            },
            serve: {
                command: 'node server.js'
            },
            devserve: {
                command: 'node server.js'
            },
            prodserve: {
                command: [
                    'set NODE_ENV=production',
                    'node server.js'
                ].join('&&')
            },
            bowerinstall: {
                command: 'bower install'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    angular: true,
                    console: true,
                    moment: true,
                    $: true,
                    alert: true,
                    escape: true,
                    c3: true,
                    FB: true
                }
            },
            with_overrides: {
                options: {
                    curly: false,
                    undef: true
                },
                files: {
                    src: [
                        'ngseed/**/*.js',
                        '!ngseed/bower_components/**/*.js',
                        '!ngseed/**/*.spec.js'
                    ]
                }
            }
        },
        processhtml: {
            options: {
                data: {
                    message: 'Hello world!'
                }
            },
            dist: {
                files: {
                    'dist/index.html': ['ngseed/index.html']
                }
            }
        },
        copy: {
            app: {
                src: 'ngseed/app/script/app.js',
                dest: 'dist/js/app.js'
            },
            templates: {
                src: ['**/*'],
                dest: 'dist/templates/',
                cwd: 'ngseed/templates',
                expand: true
            },
            assets: {
                src: ['**/*'],
                dest: 'dist/assets/',
                cwd: 'ngseed/assets',
                expand: true
            },
            fontawesome: {
                src: ['font-awesome.min.css'],
                dest: 'dist/css',
                cwd: 'ngseed/bower_components/font-awesome/css',
                expand: true
            }
        },
        clean: ['dist/'],
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd h:MM:ss") %> */',
                //mangle: false,
                compress: {
                    drop_console: true
                },
                beautify: true,
                sourceMap: true,
                sourceMapIncludeSources: true
            },

            angular: {
                options: {
                    mangle: false
                },
                files: {
                    'dist/js/lib/angular.min.js': [
                        'ngseed/bower_components/angular/angular.js'
                    ]
                }
            },

            bower_components: {
                options: {
                    mangle: false
                },
                files: {
                    'dist/js/lib/libs.min.js': [
                        'ngseed/bower_components/angular-ui-router/release/angular-ui-router.js',
                        'ngseed/bower_components/angular-resource/angular-resource.js',
                        'ngseed/bower_components/angular-cookies/angular-cookies.js',
                        'ngseed/bower_components/slick-carousel/slick/slick.js',
                        'ngseed/bower_components/angular-slick/dist/slick.js',
                        'ngseed/bower_components/angular-translate/angular-translate.js',
                        'ngseed/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                        'ngseed/bower_components/lodash/lodash.js',
                        'ngseed/bower_components/moment/moment.js',
                        'ngseed/bower_components/angular-elastic/elastic.js',
                        'ngseed/bower_components/angular-sanitize/angular-sanitize.js',
                        'ngseed/bower_components/angular-file-upload/angular-file-upload.js',
                        'ngseed/bower_components/angularjs-modal-service/src/createDialog.js',
                        'ngseed/bower_components/bootstrap/dist/js/bootstrap.js',
                        'ngseed/bower_components/angular-facebook/lib/angular-facebook.js',
                        'ngseed/bower_components/twitter-text/js/twitter-text.js',
                        'ngseed/bower_components/angular-mocks/angular-mocks.js'
                    ]
                }
            },

            ngSeed: {
                options: {
                    mangle: false
                },
                files: {
                    'dist/js/ngseed.min.js': [
                        'ngseed/app/**/*.js',
                        '!ngseed/app/app.js',
                        '!ngseed/app/**/*.spec.js',
                        '!ngseed/app/main/home/home.js'
                    ]
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/style.css': ['ngseed/app/styles/skSpinner.css', 'ngseed/app/styles/style.css'],
                    'dist/css/vendor.css': [
                        'ngseed/bower_components/slick-carousel/slick/slick.css',
                        'ngseed/bower_components/bootstrap/dist/css/bootstrap.css'
                    ]
                }
            }
        },
        //compress: {
        //    main: {
        //        options: {
        //            archive: 'dist/<%= pkg.name %>/artifact/archive/<%= pkg.name %>.zip'
        //        },
        //        files: [{
        //            src: ['css/**/*', 'js/**/*', 'templates/**/*', 'assets/**/*', 'index.html'],
        //            cwd: 'dist/',
        //            expand: true
        //        }]
        //    }
        //},

    });

    // load some npm modules
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-karma');
    //register some tasks
    grunt.registerTask('default', ['wiredep', 'less']);
    // DEPRECATED
    grunt.registerTask('serve', ['shell:serve']);
    //grunt.registerTask('devserve', ['shell:devserve']);
    //grunt.registerTask('prodserve', ['shell:prodserve']);


    grunt.registerTask('dist', ['karma', 'clean', 'copy', 'uglify', 'cssmin', 'processhtml']);
};
