// cpu性能
const os = require('os');

function instanceCpuTime() {
    let idleTime = 0;
    let tickTime = 0;
    const cpus = os.cpus();
    const length = cpus.length;
    
    for (let i = 0; i < length; i++) {
        const cpu = cpus[i];

        for (let type in cpu.times) {
            tickTime += cpu.times[type];
        }
        idleTime += cpu.times.idle;
    }

    return {
        idle: idleTime / length,
        tick: tickTime /length
    }
}

function cpuMetrics(delay = 1000) {
    const startQuantize = instanceCpuTime();

    return new Promise((resolve, reject) => {
        const endQuantize = instanceCpuTime();
        const idleDiff = endQuantize.idle - startQuantize.idle;
        const tickDiff = endQuantize.tick - startQuantize.tick;

        resolve(1 - (idleDiff / tickDiff));
    });
}

cpuMetrics().then(loadavg => {
    console.log(loadavg);
});