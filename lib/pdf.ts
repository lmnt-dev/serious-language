export function downloadNameFromPath(path: string) {
    const nodes = path.split('/');
    return nodes.at(-1) + '-' + nodes.at(-2);
}