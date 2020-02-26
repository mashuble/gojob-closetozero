function distance(from: number, to: number): number {
    return Math.abs(from - to);
}

export default function closestToZero(arr: number[]): number {
    const num: number = 0;
    if(arr.length === 0) { return num; }
    return arr.reduce((acc, x) => distance(num, x) < distance(num, acc) ? x : acc, arr[0]);
}