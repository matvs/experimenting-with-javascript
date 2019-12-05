const units = ['bytes', 'kB', 'MB', 'GB', 'TB']
function bytesToHumanReadable(bytes) {
    let level = Math.floor(Math.log(bytes)/Math.log(1024));
    if (level >= units.length) {
        level = units.length - 1;
    }
    return (bytes/Math.pow(1024, level)).toFixed(2) + ' ' + units[level];
}
