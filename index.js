import { ANSWER } from './module'
//import './style.css'
import './style.scss'

console.log( {ANSWER} );

function importAll(r) {
  return r.keys().map(r);
}
  
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|gif|svg)$/));
  
  images.forEach((img, index) => {
    console.log(`Image ${index}:`, img);
  });