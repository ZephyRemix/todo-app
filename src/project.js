export function createProject(name) {
    let reputation = 0;
    const giveReputation = () => reputation++;
    const getReputation = () => reputation;
    
    return { name, giveReputation, getReputation };
}