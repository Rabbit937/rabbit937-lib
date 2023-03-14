export function capitalize([first, ...rest]: string) {
    if (!first) return ''
    return first.toUpperCase() + rest.join("")
}