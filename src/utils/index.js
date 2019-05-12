export function hyphenToPascal (str) {
  return str.replace(/(?:^|-)([a-z])/g, (match, group) => group.toUpperCase())
}
