/** @param {NS} ns */
export async function main(ns) {
   { const part1 = "sho"; const part2 = "wbo"; const part3 = "bs"; const secretPassphrase = part1 + part2 + part3; // Secret passphrase
    const userInput = ns.args[0];  // Accept user input as an argument
    
    if (userInput === secretPassphrase) {
        const glitchText = "B0Ò8I3S (.)(.)";
        
        // Sending glitchy text
        await ns.write("glitch.txt", glitchText, "w");
        
        // Reading glitchy text
        let data = await ns.read("glitch.txt");
        ns.tprint(data);
    } else {
        ns.tprint("Access Denied: Incorrect passphrase.");
    }
} 
// Function for attacking a target
async function attackTarget(ns, target) {
    try {
        ns.brutessh(target);
        ns.ftpcrack(target); // FTPCrack.exe
        ns.relaysmtp(target); // relaySMTP.exe
        ns.httpworm(target); // HTTPWorm.exe
        ns.sqlinject(target); // SQLInject.exe
        ns.nuke(target);

        await ns.weaken(target);
        ns.tprint(`Weaken attempt on ${target} complete`);

        await ns.grow(target);
        ns.tprint(`Grow attempt on ${target} complete`);

        await ns.hack(target);
        ns.tprint(`Hack attempt on ${target} complete`);
    } catch (error) {
        ns.tprint(`Error attacking ${target}: ${error}`);
    } finally {
        ns.tprint(`Finished operation on ${target}`);
    }
}
 
    // Add some random fun messages
    const funMessages = [
        `Hacking ${target} like a pro!`,
        `Another one bites the dust!`,
        `You're unstoppable!`,
        `Keep it up, hacker extraordinaire!`,
        `Boom! ${target} didn't see that coming!`
// Placeholder for the attackTarget function
,async function Add(a, b ,target) {
    // Implement the attack logic here
    // This is a placeholder function
    // Example: await ns.hack(target);eholder function
    // Example: await ns.hack(target);}
}]}
