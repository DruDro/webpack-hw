import $ from 'jquery';


export const builder = (tag = 'div', content = '', className = 'box') => {
  const element = $(`<${tag} class="${className}">${content}</${tag}`);
  return element;
};
