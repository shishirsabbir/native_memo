export function capitalizeSingleWord(word: string) {
    if (word.includes(' ')) {
        throw new Error('input must be single word (no spaces)');
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function capitalizeAllWords(sentence: string) {
    return sentence
        .split(' ')
        .filter((w) => w.length > 0)
        .map((word: string) => capitalizeSingleWord(word))
        .join(' ');
}

export async function waitForSeconds(second: number) {
    if (!Number.isInteger(second)) {
        throw new Error('second must be an integer');
    }

    return new Promise((resolve) => setTimeout(resolve, second * 1000));
}
