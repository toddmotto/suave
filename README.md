# Suave [![Build Status](https://travis-ci.org/toddmotto/suave.png)](https://travis-ci.org/toddmotto/suave)

Suave, for elegant HTML5 videos (how they should have been). Suave was built to re-engineer the unstructured mess the HTML5 `<video>` tag presents. Suave cleverly takes all the strain of nested `<source>` tags and file types away from you allowing you to code an HTML5 video in just one line:

```html
<video data-src="video/mymovie.{mp4, ogv, webm}"></video>
```

## Demo
Check out a [demo of Suave](http://toddmotto.com/labs/suave).

## Installing with Bower
To install Suave into your project using Bower, use the GitHub repository hook:

```
bower install https://github.com/toddmotto/suave.git
```

## Manual installation
Drop your files into your required folders, make sure you're using the file(s) from the `dist` folder, which is the compiled production-ready code. Ensure you place the script before the closing `</body>` tag so the DOM tree is populated when the script runs.
	
```html
<body>
	<!-- html content above -->
	<script src="dist/suave.js"></script>
</body>
```

## Configuring Suave
Suave really is super-simple:

```html
<video data-src="video/mymovie.{mp4, ogv, webm}"></video>
```

All you need to do is insert the file extensions you need (separated by commas) inside the `data-src` attribute, and suave will work it's magic for you by dynamically creating the required `<source>` tags with the relevant `src` and `type` attributes.

## Scaffolding
Project files and folder structure.

```
├── dist/
│   ├── suave.js
│   └── suave.min.js
├── src/
│   └── suave.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── Gruntfile.js
└── package.json
```

## License
MIT license