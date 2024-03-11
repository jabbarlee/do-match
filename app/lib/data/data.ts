
const generateMatchId = () => {
    const randomString = Math.random().toString(16).substr(2);
    return randomString;
}

// console.log(matchId)
export { generateMatchId }