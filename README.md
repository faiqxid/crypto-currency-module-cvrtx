```markdown
# Crypto Currency Module

This is a Node.js module for converting currency and encrypting/decrypting transaction details.

## Installation

To install the module, use npm:

```bash
npm install crypto-currency-module
```

## Usage

```javascript
const { convertCurrency, encryptTransactionDetails, decryptTransactionDetails } = require('crypto-currency-module');

// Convert currency
const convertedAmount = convertCurrency(100, 'BTC', 'ETH');
console.log('Converted Amount:', convertedAmount);

// Encrypt transaction details
const transaction = { from: 'Alice', to: 'Bob', amount: 10 };
const key = 'secret_key';
const encryptedTransaction = encryptTransactionDetails(transaction, key);
console.log('Encrypted Transaction:', encryptedTransaction);

// Decrypt transaction details
const decryptedTransaction = decryptTransactionDetails(encryptedTransaction, key);
console.log('Decrypted Transaction:', decryptedTransaction);
```

## API

### `convertCurrency(amount, fromCurrency, toCurrency)`

Converts the given amount from one cryptocurrency to another.

- `amount` (number): The amount to convert.
- `fromCurrency` (string): The currency to convert from (e.g., 'BTC').
- `toCurrency` (string): The currency to convert to (e.g., 'ETH').

Returns the converted amount.

### `encryptTransactionDetails(transaction, key)`

Encrypts the given transaction details using the provided key.

- `transaction` (object): The transaction details to encrypt.
- `key` (string): The encryption key.

Returns the encrypted transaction details.

### `decryptTransactionDetails(encryptedTransaction, key)`

Decrypts the encrypted transaction details using the provided key.

- `encryptedTransaction` (string): The encrypted transaction details.
- `key` (string): The decryption key.

Returns the decrypted transaction details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```