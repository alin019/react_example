import React from 'react';
import { pageLinks } from '../data';

function PageLinks({ parentClass, itemClass, id }) {
  return (
    <ul className={parentClass} id={id}>
    <li><a href={pageLinks[0].href} className={itemClass}>{pageLinks[0].text}</a></li>
    <li><a href={pageLinks[1].href} className={itemClass}>{pageLinks[1].text}</a></li>
    <li><a href={pageLinks[2].href} className={itemClass}>{pageLinks[2].text}</a></li>
    <li><a href={pageLinks[3].href} className={itemClass}>{pageLinks[3].text}</a></li>
    </ul>
  )
}

export default PageLinks