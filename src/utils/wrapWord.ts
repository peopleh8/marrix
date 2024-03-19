export const wrapWord = (str: string) => {
  const words = str.split(' ')

  return words.map((word) => `<span>${word}&nbsp;</span>`).join(` `)
}