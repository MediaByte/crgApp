const convert = require('xml-js');
const options = {ignoreComment: true, alwaysChildren: true};
const ConnectToYGL = (props) => {
  fetch([`https://www.yougotlistings.com/api/rentals/search.php?key=${props}`])
    .then(xml => xml.text())
    .then(xml => convert.xml2json(xml, options))
    .then(response => response.toLowerCase())
    .then(response => JSON.parse(response))
    .then(console.log)
}
export default ConnectToYGL;