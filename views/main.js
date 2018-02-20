var html = require('choo/html')

var links = [
  {
    name: 'flat-tree',
    description: 'A series of functions to map a binary tree to a list',
    url: 'https://github.com/mafintosh/flat-tree-rs'
  },
  {
    name: 'merkle-tree-stream',
    description: 'A stream that generates a merkle tree based on the incoming data',
    url: 'https://github.com/yoshuawuyts/merkle-tree-stream'
  },
  {
    name: 'print-flat-tree',
    description: 'Converts a flat-tree to a string',
    url: 'https://github.com/yoshuawuyts/print-flat-tree'
  },
  {
    name: 'sleep-protocol',
    description: ' SLEEP Network Protocol protobuf definitions',
    url: 'https://github.com/yoshuawuyts/sleep-protocol'
  }
]

var reading = [
  {
    name: 'Dat Paper',
    url: 'https://github.com/datproject/docs/blob/master/papers/dat-paper.md'
  },
  {
    name: 'SLEEP Paper',
    url: 'https://github.com/datproject/docs/blob/master/papers/sleep.md'
  }
]

module.exports = view

function view (state, emit) {
  emit('DOMTitleChange', 'dat.rs')

  return html`
    <body class="code lh-copy">
      <main class="pa4 flex flex-column flex-row-l center mw9">
        <section class="flex-column mw6">
          <h1 class="f2">dat.rs</h1>
          <p>
            Rustlang implementation of the Dat Project protocols. The goal is to
            eventually bind to C, WebAssembly, Swift and Java.
          </p>
          <p>
            Not every part of Dat will be equally portable. Especially browsers
            and mobile platforms have limitations in regards to IO.
            Platform-specific solutions will be necessary.
          </p>
          <article class="mt5">
            <h2>Overview</h2>
            <p>
              Dat is built up out of several data structures, and wire formats.
              At the lowest level there's the flat-tree module, which can store
              a merkle tree on disk.
            </p>
            <p>
              [encrypt each node, store it in the merkle tree stream]
            </p>
            <p>
              [encryption itself]
            </p>
            <p>
              [9 files, on disk-format]
            </p>
          </article>
          <article class="mt5">
            <h2>Further Reading</h2>
            <ul>
              ${reading.map(link => html`
                <li class="mt3"><a href=${link.url}>
                  ${link.name}
                </a></li>
              `)}
            </ul>
          </article>
        </section>
        <section class="mw6 mt5 ml6-l flex flex-column">
          <h2>
            Repositories
          </h2>
          ${links.map(link => html`
            <div class="mb3">
              <a href=${link.url}>
                ${link.name}
              </a>
              <span> - ${link.description}</span>
            </div>
          `)}
        </section>
      </main>
    </body>
  `
}
