import type { AbiItem } from 'web3-utils'

export const guestbookContractAbi: AbiItem = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  { inputs: [], name: 'ContentMustNotEmpty', type: 'error' },
  { inputs: [], name: 'SpamMessage', type: 'error' },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'author', type: 'address' },
          { internalType: 'uint96', name: 'createdAt', type: 'uint96' },
          { internalType: 'string', name: 'content', type: 'string' },
        ],
        indexed: false,
        internalType: 'struct IGuestbook.Message',
        name: 'message',
        type: 'tuple',
      },
    ],
    name: 'MessageSent',
    type: 'event',
  },
  {
    inputs: [],
    name: 'getMessages',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'author', type: 'address' },
          { internalType: 'uint96', name: 'createdAt', type: 'uint96' },
          { internalType: 'string', name: 'content', type: 'string' },
        ],
        internalType: 'struct IGuestbook.Message[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: 'content', type: 'string' }],
    name: 'sendMessage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
