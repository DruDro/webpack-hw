const builder = require('../elementBuilder');

const date = new Date(); 
const content = `
<h1>${document.title}
  <sup>
    <small>${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}</small>
  </sup>
</h1>
<span class="triangle--down"></span>
<span class="triangle--up"></span>
<span class="triangle--right"></span>
<span class="triangle--left"></span>
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
</ul>`;

module.exports = builder('main', content, 'main');