// cryptoHelper.js

const { convertCurrency, encrypt, decrypt } = require('crypto-currency-helper');

function convertCurrency(amount, fromCurrency, toCurrency) {
    return convertCurrency(amount, fromCurrency, toCurrency);
}

function encryptTransactionDetails(transaction, key) {
    return encrypt(JSON.stringify(transaction), key);
}

function decryptTransactionDetails(encryptedTransaction, key) {
    const decryptedData = decrypt(encryptedTransaction, key);
    return JSON.parse(decryptedData);
}

module.exports = {
    convertCurrency,
    encryptTransactionDetails,
    decryptTransactionDetails
};
