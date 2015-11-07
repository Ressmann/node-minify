var http = require('http');
var compressor = require('../lib/node-minify');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

var test = compressor.minify({
  type: 'sqwish',
  fileIn: 'public/css/base.css',
  fileOut: 'public/dist/yui-css.css'
  //sync: true,
  /*options: {
    charset: 'utf8',
    nomunge: true,
    'line-break': 80,
    'preserve-semi': false,
    'disable-optimizations': true
  },*/
});

test.then(function(data) {
  console.log('================== then', data);
});

test.catch(function(data) {
  console.log('================== catch', data);
});

/*compressor.minify({
  type: 'yui-css',
  fileIn: 'public/css/base.css',
  fileOut: 'public/dist/yui-css.css',
  //sync: true,
  /!*options: {
    charset: 'utf8',
    nomunge: true,
    'line-break': 80,
    'preserve-semi': false,
    'disable-optimizations': true
  },*!/
  callback: function(err, min) {
    console.log('CB - yui css');
    console.log(err);
    //console.log(min);
  }
});*/

/*compressor.minify({
  type: 'sqwish',
  fileIn: 'public/css/base.css',
  fileOut: 'public/dist/sqwish.css',
  //sync: true,
  options: {
    strict: true
  },
  callback: function(err, min) {
    console.log('sqwish');
    console.log(err);
    //console.log(min);
  }
});

compressor.minify({
  type: 'clean-css',
  fileIn: 'public/css/base.css',
  fileOut: 'public/dist/clean-css.css',
  //sync: true,
  options: {
    keepBreaks: true,
    restructuring: false,
    roundingPrecision: -1
  },
  callback: function(err, min) {
    console.log('clean-css');
    console.log(err);
    //console.log(min);
  }
});

compressor.minify({
  type: 'csso',
  fileIn: 'public/css/base.css',
  fileOut: 'public/dist/csso.css',
  //sync: true,
  callback: function(err, min) {
    console.log('csso');
    console.log(err);
    //console.log(min);
  }
});

compressor.minify({
  type: 'uglifyjs',
  fileIn: 'public/js/base.js',
  fileOut: 'public/dist/uglifyjs.js',
  //sync: true,
  options: {
    warnings: true,
    mangle: false,
    compress: false
  },
  callback: function(err, min) {
    console.log('uglify');
    console.log(err);
    //console.log(min);
  }
});

compressor.minify({
  type: 'no-compress',
  fileIn: 'public/js/!**!/!*.js',
  fileOut: 'public/dist/no-compress.js',
  sync: true,
  callback: function(err, min) {
    console.log('no-compress');
    console.log(err);
    //console.log(min);
  }
});*/

var dataMin;

compressor.minify({
  type: 'gcc',
  //publicFolder: './public/',
  //fileIn: '/js/**/*.js',
  fileIn: ['public/js/base.js', 'public/js/base2.js', 'public/js/jquery-2.1.4.js', 'public/js/jquery-2.1.4.js', 'public/js/jquery-2.1.4.js', 'public/js/jquery-2.1.4.js', 'public/js/jquery-2.1.4.js'],
  fileOut: 'public/dist/gcc.js',
  //sync: true,
  /*options: {
    charset: 'utf8',
    compilation_level: 'ADVANCED_OPTIMIZATIONS',
    jscomp_error: 'accessControls',
    debug: true,
    formatting: 'PRETTY_PRINT'
  },*/
  callback: function(err, min) {
    console.log('GCC cb');
    //dataMin = min;
    console.log(err);
    //console.log(min);
  }
})
  .then(function(data) {
    console.log('promise data');
    dataMin = data;
    foo();
  })
  .catch(function(err) {
    console.log('promise err', err);
  });

function foo() {
  console.log('something else', typeof dataMin);
}

foo();

/*compressor.minify({
  type: 'gcc',
  publicFolder: './public/',
  //fileIn: '/js/!**!/!*.js',
  fileIn: 'js/base.js',
  fileOut: 'public/dist/wildcards-match-gcc.js',
  sync: true
});*/

console.log('Server running at http://127.0.0.1:1337/');