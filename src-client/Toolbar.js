import React from 'react'
import InlineBlotConstructor from './InlineBlotConstructor'
import BlockBlotConstructor from './BlockBlotConstructor'
import LinkBlot from './LinkBlot'



const Toolbar = () => {
    return <div>
        <InlineBlotConstructor blotName={'I'} tagName={'i'} />
        <InlineBlotConstructor blotName={'B'} tagName={'b'} />
        <LinkBlot />
        <BlockBlotConstructor blotName={'blockquote'} tagName={'blockquote'} />
    </div>
}


export default Toolbar