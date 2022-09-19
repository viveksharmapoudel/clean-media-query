import { css, CSSObject } from 'styled-components/macro'

interface ISizes {
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  minWidthHeader: string
  xl: string
  smallDesktop: string
  xxl: string
}

export const sizes: ISizes = {
  xxs: '375',
  xs: '480',
  sm: '576',
  md: '768',
  lg: '992',
  minWidthHeader: '1050',
  xl: '1200',
  smallDesktop: '1366',
  xxl: '1600',
}

export const media = Object.keys(sizes).reduce(
  (accumulator: Record<string, Function>, label: string) => {
    const pxSize: string = sizes[label as keyof ISizes]

    accumulator[label] = (args: CSSObject) =>
      css`
        @media (max-width: ${pxSize}px) {
          ${css(args)}
        }
      `

    return accumulator
  },
  {},
)
