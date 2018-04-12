var html = require('choo/html')

var links = [
  {
    name: 'flat-tree',
    description: 'A series of functions to map a binary tree to a list. This is later used to create Merkle Trees. The first algorithm required to implement the Dat protocol.',
    url: 'https://github.com/datrs/flat-tree'
  },
  {
    name: 'print-flat-tree',
    description: 'Converts a flat-tree to a string on the command line. Useful to visualize the "flat-tree" data structure and give you a better sense of how it works.',
    url: 'https://github.com/datrs/print-flat-tree'
  },
  {
    name: 'merkle-tree-stream',
    description: 'A stream that generates a merkle tree based on the incoming data. This is the part that converts data into hashes, and creates hashes of hashes for verification. This is needed to be able to create Dat archives, but not to read them.',
    url: 'https://github.com/datrs/merkle-tree-stream'
  },
  {
    name: 'random-access-storage',
    description: 'An abstract interface to implement reading / writing bytes to different backends from different offsets.',
    url: 'https://github.com/datrs/random-access-storage'
  },
  {
    name: 'random-access-memory',
    description: 'Continuously read,write to memory using random offsets and lengths. This is particularly useful for testing and prototyping.',
    url: 'https://github.com/datrs/random-access-memory'
  },
  {
    name: 'random-access-file',
    description: 'Continuously read,write to disk using random offsets and lengths. This is useful for persisting archives to disk.',
    url: 'https://github.com/datrs/random-access-file'
  },
  {
    name: 'sleep-protocol',
    description: ' SLEEP Network Protocol protobuf definitions. Not needed until you start sending things down the wire.',
    url: 'https://github.com/yoshuawuyts/sleep-protocol'
  }
]

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
          ${links.map((link, index) => html`
            <div class="mb3 pv3">
              <strong>${index + 1}. </strong>
              <a href=${link.url} class="white">
                ${link.name}
              </a>
              <br>
              <span class="mt2">${link.description}</span>
            </div>
          `)}
        </section>
      </main>
    </body>
  `
}
