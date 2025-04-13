export const GetIpfsUrlFromPinata = (pinataUrl) => {
    if (!pinataUrl) return "";
    const index = pinataUrl.indexOf("/ipfs/");
    if (index === -1) return pinataUrl; // fallback: return original URL
    const ipfsPath = pinataUrl.substring(index + 6); // strip "/ipfs/"
    return `https://ipfs.io/ipfs/${ipfsPath}`;
};
