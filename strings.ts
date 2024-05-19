/**
 * The function `toTitle` takes a string input and returns the same string with the first letter of
 * each word capitalized.
 * @param {string} str - The `str` parameter in the `toTitle` function is a string that represents the
 * input text that you want to convert to title case.
 * @returns The function `toTitle` takes a string as input and returns a new string where the first
 * letter of each word is capitalized. If the input string is empty or falsy, an empty string is
 * returned.
 */
export function toTitle(str: string): string {
    if (!str) {
        return ''
    }
    return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase())
}
