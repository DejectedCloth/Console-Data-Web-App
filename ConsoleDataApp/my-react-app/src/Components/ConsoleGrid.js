import React from 'react'
import { useState } from 'react'
import Console from './Console'
import './ConsoleGrid.css';


export default function ConsoleGrid() {
    const [consoles, setConsoles] = useState([{id: 1, image:'https://th.bing.com/th/id/OIP.yXtw6K_5sSWxMLWoMNvUDwHaIx?w=167&h=198&c=7&r=0&o=5&pid=1.7', 
    name:'Xbox', Year: '2020', Description:'The latest release in the Xbox console family', info:'https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S'}, {id:2, image:'https://th.bing.com/th/id/OIP.vH-suZ2OkjS_aimp7YBavwHaDW?pid=ImgDet&rs=1', 
    name:'Playstation', Year: '2001', Description:'This marked the beginning of the Playstation series', info:'https://en.wikipedia.org/wiki/PlayStation_(console)'}, {id:3, image:'https://media.comicbook.com/2018/09/nintendo-64-1134919.jpeg',
    name:'Nintendo 64', Year:'1996', Description:'A console known for revolutionizing 3d gaming during a time where 2d dominated the market', info:'https://en.wikipedia.org/wiki/Nintendo_64'}, {id:4, image:'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/320w/products/37239/49565/dsi------white__71726.1668183726.jpg?c=2',
    name:'Nintendo DS', Year:'2004', Description:'Highest selling handheld ever', info:'https://en.wikipedia.org/wiki/Nintendo_DS'}, {id:5, image:'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/320w/products/31017/27509/NES_Mario_2Player__13131.1667842678.jpg?c=2',
    name:'Nintendo Entertainment System', Year:'1983', Description:'The NES was an 8-bit game console that combined the best elements from Nintendo’s previous Color TV-Game and Game & Watch.', info:'https://en.wikipedia.org/wiki/Nintendo_Entertainment_System'},{id:6, image:'https://th.bing.com/th/id/OIP.lRf9ugbWJpChBXG9Rpcm7AHaF6?pid=ImgDet&rs=1',
    name:'Playstation 2', Year:'2000', Description:'Best selling console to dat with 157 million units sold', info:'https://en.wikipedia.org/wiki/PlayStation_2'}]);
  return (
    consoles.map(console => <Console console={console}/>)
    
  )
}
