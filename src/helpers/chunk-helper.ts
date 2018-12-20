export default function chunkify<T>(source: T[], n: number) : T[][] {
    if (n < 2) {
        return [source];
    }

    return source.length % n === 0
        ? splitSymmetricalArray(source, n)
        : splitNonSymmetricalArray(source, n);
}

function splitSymmetricalArray<T>(source: T[], n: number) : T[][] {
    const result: T[][] = [];

    const size = Math.floor(source.length / n);

    for (let i = 0; i < source.length; i += size) {
        result.push(source.slice(i, i + size));
    }

    return result;
}

function splitNonSymmetricalArray<T>(source: T[], n: number) : T[][] {
    const result: T[][] = [];

    let i = 0;

    while (i < source.length) {
        const size = Math.ceil((source.length - i) / n--);

        result.push(source.slice(i, i + size));

        i += size;
    }

    return result;
}