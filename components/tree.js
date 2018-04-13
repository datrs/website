var Component = require('choo/component')
var html = require('choo/html')
var path = require('path')
var fs = require('fs')

var deps = JSON.parse(fs.readFileSync(path.join(__dirname, '../modules.json'), 'utf8'))
console.log('fuuu')

module.exports = class Tree extends Component {
  render () {
    return html`
      <section class="cf">
        ${deps.map(el)}
      </section>
    `
  }
}

function el (item, i) {
  let pr = i % 2 ? '' : 'pr3-l'
  let pl = i % 2 ? 'pl3-l' : ''
  return html`
    <article class="flex flex-column mv3 fl w-100 w-50-l ${pr} ${pl}">
      <a href="https://github.com/datrs/${item.name}"
        class="f5 white bt b--gray pt3">
        ${item.name}
      </a>
      <p class="gray f5 mt0">
        ${item.category}
      </p>
      <p class="f3 mt2 bold archivo">
        ${item.description}
      </p>
    </article>
  `
}
