import abi from './Transactions.json';

export const contractABI = abi.abi;
export const contractAddress = "0xCaBB8676B7460f660b526e9DA6d01A58cDDb2EC4";
export const marketCoinsAPI = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";