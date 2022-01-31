require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remain method hockey kitten bubble skill'; 
let testAccounts = [
"0x7ea50b144b9d69f705aca10aeb6df121e1a8f09298a1a258e66eb4776af79a71",
"0x8642d32c8fc40973f312cb74719889e9860d38bd89954e0ade5f5e0ef7f176ba",
"0xbaabc70470070866446e80ddb1f3d9d90c3e425930a638768d48a1ec2f078050",
"0x0a3be547ae6dab8423428b62886e2612c3da66c40d2846ffe6981db0f729f105",
"0x8fc4052991ce830849444f6fe6389cae0b8351598cb5f6d9a7ba16d821289158",
"0xed15d10df2a50f77dded52c0ea4efc3db0310b993a845d82a74fb350aa118c88",
"0xe01c178d49c391e43879099da9670e38e61140123ef0ffd25c7e7274a90bcf10",
"0x2778261a861806480f18d4c5949b94af19e485db19dc16be5419b317324eb616",
"0x4c177cb1fc7fa5cfaba62d6a81b4433fd852c97ffd8289083e4a864c6bf26fdd",
"0xa2af40be60e34acfa0b522ca330c88eb5739144b9ddddf07b017f2760636bcae"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

