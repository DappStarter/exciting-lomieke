require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remember mistake hope enroll food slogan'; 
let testAccounts = [
"0x65df15112af611daa4535c1550e242af465395faef4416cdbc33ad2ed1829019",
"0xb4792727c1ee852508625bf824713c8c9e419df22b75595065668516ea782da7",
"0xed60891c839160ec195f56212f026d52184476acfde6c00cda27dde4f05cb43d",
"0xdaf8b5a353577d1f354f50955cae4525ce2a781824a94a2a6df59087b450eac7",
"0xc42259c752a604d7cb87f8b30c7c4aa88e8ffd241bde8289201869ce8d3229cd",
"0x5ce7250c5daa30ae8dc08f692411235a50aa808f84046fbb98ccbcfe327f1bbf",
"0x65a0405b46abd74d382e414dc0a95aa83388aa4419a09cbf80f0ee2c40dc5dc2",
"0x6b001277716968c43bc58a27702d2f5450e75ebb218c30050c8e3a0a83f70600",
"0xebdb32bf1530b86efbf97acc66c5c2fe1047fbbcde2006227b1fe5af1d5cc127",
"0xb74a59483d64c24cca03563a44b32163eb438bfb84a9231f37c5e72b62fbe004"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
