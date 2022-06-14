// THIS IS A ANONYMUS VAR
//const slugify = require('slugify');

module.exports = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    output = output.replace(/{%SLUG%}/g, product.slug);

    //const outputRight = slugify(product.productName, { lower: true});
    //console.log(outputRight);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
    return output;
}

