const backgroundColor = '#33312f';
const foregroundColor = '#ede9e6';
module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 18,
    // font family with optional fallbacks
    fontFamily: 'Input, Space Mono, monospace',
    // terminal cursor background color (hex)
    cursorColor: foregroundColor,
    // color of the text
    foregroundColor: foregroundColor,
    // terminal background color
    backgroundColor: backgroundColor,
    // border color (window, tabs)
    borderColor: '#333130',
    // custom css to embed in the main window
    css: '',
    // custom padding (css format, i.e.: `top right bottom left`)
    termCSS: '',
    // custom padding
    padding: '1rem 1rem 0',
    // some color overrides. see http://bit.ly/29k1iU2 for
    // the full list
    colors: {
      black: backgroundColor,
      red: '#f15729',
      green: '#bfd849',
      yellow: '#f4da5c',
      blue: '#5fbae9',
      magenta: '#c76baa',
      cyan: '#66ddd2',
      white: '#ede9e6',
      lightBlack: '#333130',
      lightRed: '#f15729',
      lightGreen: '#bfd849',
      lightYellow: '#f4da5c',
      lightBlue: '#5fbae9',
      lightMagenta: '#c76baa',
      lightCyan: '#66ddd2',
      lightWhite: foregroundColor,
    },
    shell: 'zsh',
  },
  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hypersolar`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [],
  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
