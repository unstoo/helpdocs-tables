import React from 'react'
import Quill from 'quill'
let Inline = Quill.import('blots/inline')

const LinkBlot = ({ blotName, tagName }) => {
    
    class aBlot extends Inline {
        static create(value) {
          let node = super.create();
          // Sanitize url value if desired
          node.setAttribute('href', value)
          // Okay to set other non-format related attributes
          // These are invisible to Parchment so must be static
          node.setAttribute('target', '_blank')
          return node;
        }
      
        static formats(node) {
          // We will only be called with a node already
          // determined to be a Link blot, so we do
          // not need to check ourselves
          return node.getAttribute('href')
        }
      }

      aBlot.blotName = 'link'
      aBlot.tagName = 'a'
      aBlot.className = `ql-cpay-link`
      Quill.register(LinkBlot)

    return <button onClick={() => { 
        let value = prompt('Enter link URL')
        // красивый tooltip при добавлении и на ховер
        window.quill.format('link', value)}}>
        A
    </button>

}




export default LinkBlot