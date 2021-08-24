exports.convertDataToHtml = (blocks) => {
  var convertedHtml = '';
  if (!blocks) {
    return '';
  }
  blocks.map((block) => {
    switch (block.type) {
      case 'header':
        convertedHtml += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
        break;
      case 'embed':
        convertedHtml += `<div class="videoWrapperOuter"> <div class="videoWrapperInner"> <iframe src="${block.data.embed}?rel=0" frameborder="0" allowfullscreen></iframe></div></div>`;
        break;
      case 'paragraph':
        convertedHtml += `<p>${block.data.text.replaceAll(
          '<a',
          '<a target="_blank"'
        )}</p>`;
        break;
      case 'delimiter':
        convertedHtml += '<hr />';
        break;
      case 'simpleImage':
        convertedHtml += `<img src="${block.data.url}" alt="${block.data.caption}" />`;
        break;
      case 'list':
        convertedHtml += '<ol>';
        block.data.items.forEach(function (li) {
          convertedHtml += `<li>${li}</li>`;
        });
        convertedHtml += '</ol>';
        break;
      case 'quote':
        console.log(blocks.data);
        convertedHtml += `<blockquote class="otro-blockquote">${block.data.text}<span>${block.data.caption}<span></blockquote>`;
        break;

      case 'table':
        convertedHtml += '<table>';
        block.data.content.forEach(function (row, index) {
          convertedHtml += '<tr>';
          row.forEach(function (ele) {
            ele = ele.replaceAll('true', 'false');
            if (index > 0) convertedHtml += `<td>${ele}</td>`;
            else convertedHtml += `<th>${ele}</th>`;
          });
          convertedHtml += '</tr>';
        });
        convertedHtml += '</table>';
        break;

      case 'code':
        console.log(block.data.code);
        block.data.code = block.data.code
          .replaceAll('<', '&lt;')
          .replaceAll('>', '&gt;');
        convertedHtml += `<pre>${block.data.code}</pre>`;
        break;

      default:
        console.log('Unknown block type', block.type);
        break;
    }
  });
  return convertedHtml;
};
