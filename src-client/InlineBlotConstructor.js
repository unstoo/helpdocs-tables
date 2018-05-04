import React from 'react'
import Quill from 'quill'
let Inline = Quill.import('blots/inline')

const InlineBlotConstructor = ({ blotName, tagName }) => {
    
    class aBlot extends Inline { }
    aBlot.blotName = blotName
    aBlot.tagName = tagName
    aBlot.className = `ql-cpay-${blotName || 'noclass'}`
    Quill.register(aBlot)

    return <button onClick={() => { 
        window.quill.format(blotName, true) }}>
        {blotName}
    </button>

}


export default InlineBlotConstructor