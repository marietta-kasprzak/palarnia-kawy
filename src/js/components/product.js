import { templates } from '../settingsNew.js';
import utils from '../utils.js';

class Product {
  constructor(product) {
    console.log(product);
    const thisProduct = this;
    thisProduct.data = product;
    thisProduct.render();
  }

  render() {
    const thisProduct = this;
    const productListContainer = document.querySelectorAll('.product_list');

    for (const element of productListContainer){
      const generatedHTML = templates.product(thisProduct.data);
      thisProduct.element = utils.createDOMFromHTML(generatedHTML);
      element.appendChild(thisProduct.element);
    }
  }
}

export default Product;
