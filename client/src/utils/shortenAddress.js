export const shortenAddress = (address) => {
    try {
        return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
    }
    catch (error) {
        return "";
    }
}
