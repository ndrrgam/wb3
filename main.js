import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/html';
import { configureChains, createConfig } from '@wagmi/core';
import { arbitrum, mainnet, polygon } from 'viem/chains';

const chains = [arbitrum, mainnet, polygon];
const projectId = 'fbf0d678f0ce730c061e4a1c264cd1d1';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
const web3modal = new Web3Modal({ projectId }, ethereumClient);
