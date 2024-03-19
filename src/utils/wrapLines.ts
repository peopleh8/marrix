export const wrapLines = (str: string) => {
  const words = str.split('\n')

  return words.map((word) => `<span class="line"><span class="line-inner">${word}&nbsp;</span></span>`).join(` `)
}