var html = require('choo/html')

var Tree = require('../components/tree')

module.exports = view

function view (state, emit) {
  emit('DOMTitleChange', 'dat.rs')

  return html`
    <body class="lh-copy sans-serif">
      <main class="pa4 flex flex-column flex-row-l center mw9">
        <section class="flex-column measure-narrow">
          <h1 class="f-headline">
            dat.rs
          </h1>
          <h2 class="f5 bt b--gray pt3">
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
        </section>
        <section class="mw6 ml6-l flex flex-column">
          <h2 class="f5 bt b--gray pt3">
            Repositories
          </h2>
          ${state.cache(Tree, 'tree').render()}
        </section>
      </main>
    </body>
  `
}
