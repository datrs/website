var html = require('choo/html')

var Tree = require('../components/tree')

module.exports = view

function view (state, emit) {
  emit('DOMTitleChange', 'dat.rs')

  return html`
    <body class="lh-copy sans-serif">
      <main class="pa4 flex flex-column flex-row-l center mw9">
        <section class="flex-column measure-narrow">
          <img src="/assets/icon.svg" height="200px" width="200px" class="white ml5">
          <h2 class="f5 bt b--gray pt3 mt4">
            Description
          </h2>
          <p class="pt3">
            Rustlang implementation of the Dat Project protocols. The goal is to
            eventually bind to C, WebAssembly, Swift and Java to support most
            native platforms.
          </p>
          <p>
            Not every part of Dat will be equally portable. Especially browsers
            and mobile platforms have limitations in regards to IO.
            Platform-specific solutions will be necessary.
          </p>
          <p>
            But we're convinced we can pull it off. Get involved if this sounds
            like fun to you; help is always welcome!
          </p>
          <p>
            To contribute to the project visit <a
            href="https://github.com/datrs">github.com/datrs</a>.
          </p>
        </section>
        <section class="mw7 ml6-l flex flex-column w-100">
          <span class="f6 w-100 tl b mb3">
            Repositories
          </span>
          ${state.cache(Tree, 'tree').render()}
        </section>
      </main>
    </body>
  `
}
