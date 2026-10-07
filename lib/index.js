import { provide } from '@siminjs/render/env.js'

provide('createText' ,v => document.createTextNode(v ?? ''))
provide('createElement' ,(t ,isSvg) => document.createElement(t))
provide('createFragment' ,() => document.createDocumentFragment())

provide('append' ,(dest ,...nodes) => dest.append(...nodes))
provide('replace' ,(dest ,...nodes) => dest.replaceWith(...nodes))
provide('remove' ,n => n.remove())

provide('setAttribute' ,(n ,k ,v) => n.setAttribute(k ,v))
provide('removeAttribute' ,(n ,k) => n.removeAttribute(k))

provide('isNode' ,n => (n instanceof Node))

var markerValueDescriber = {value: '#marker'}

provide('createMarker' ,() => Object.defineProperty(
  document.createTextNode('') ,'nodeName' ,markerValueDescriber
))

provide('isMarker' ,n => (n.nodeName == '#marker'))

provide('getNext' ,n => n.nextSibling)
provide('getChildNodes' ,n => n.childNodes)
provide('getChildren' ,n => [...n.childNodes])
provide('getParent' ,n => n.parentNode)

provide('addListener' ,(n ,e ,f ,o) => n.addEventListener(e ,f ,o))
provide('removeListener' ,(n ,e ,f ,o) => n.removeEventListener(e ,f ,o))

provide('assignProp' ,(n ,p ,v) => (n[p] = v))
provide('removeProp' ,(n ,p) => (n[p] = ''))

provide('addClass' ,(n ,c) => n.classList.add(c))
provide('removeClass' ,(n ,c) => n.classList.remove(c))

provide('setStyle' ,(n ,p ,v) => n.style.setProperty(p ,v))
provide('removeStyle' ,(n ,p) => n.style.removeProperty(p))
