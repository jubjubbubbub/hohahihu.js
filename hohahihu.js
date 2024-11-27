/** @param {NS} ns **/
export async function main(ns) {
    const part1 = "sho";  // Part 1 of the passphrase
    const part2 = "wbo";  // Part 2 of the passphrase
    const part3 = "bs";   // Part 3 of the passphrase
    const secretPassphrase = part1 + part2 + part3; // Secret passphrase
    const userInput = ns.args[0];  // Accept user input as an argument

    // Check if the user input matches the secret passphrase for the hidden message
    if (userInput === secretPassphrase) {
        const glitchText = part1 + "B0Ò8I3S" + part2 + "(.)(.)" + part3;
        
        // Sending glitchy text
        await ns.write("glitch.txt", glitchText, "w");
        
        // Reading glitchy text
        let data = await ns.read("glitch.txt");
        ns.tprint(data);
    }

    const target = ns.args[1] || "n00dles"; // Default to 'n00dles' if no target is specified
    await attackTarget(ns, target);

    // Add some random fun messages
    const funMessages = [
        `You're absolutely sho-mazing at hacking!`,
        `wbo-Hoo! You crushed it!`,
        `Great that the bs-hit ${target} is gone!`,
        `Thankfully ${target} didn't decrypt this`,
    ];
    const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
    ns.tprint(randomMessage);
}

// Function for attacking a target
async function attackTarget(ns, target) {
    const part1 = "sho";  // Part 1 of the passphrase
    const part2 = "wbo";  // Part 2 of the passphrase
    const part3 = "bs";   // Part 3 of the passphrase
    
    try {
        ns.brutessh(target);
        ns.ftpcrack(target); // FTPCrack.exe
        ns.relaysmtp(target); // relaySMTP.exe
        ns.httpworm(target); // HTTPWorm.exe
        ns.sqlinject(target); // SQLInject.exe
        ns.nuke(target);

        await ns.weaken(target);
        ns.tprint(`Weaken attempt on ${target} complete ${part1}`);

        await ns.grow(target);
        ns.tprint(`Grow attempt on ${target} complete ${part2}`);

        await ns.hack(target);
        ns.tprint(`Hack attempt on ${target} complete ${part3}`);
    } catch (error) {
        ns.tprint(`Error attacking ${target}: ${error}`);
    } finally {
        ns.tprint(`Finished operation on ${target} ${part1}${part2}${part3}`);
    }
}
