// Modules
import { RefObject } from 'react'

export interface IRoutes {
  routes: {
    anchor: string
    title: string
    linkRef: RefObject<HTMLDivElement | undefined>
  }[]
  handleScrollTo: (event: React.MouseEvent<HTMLAnchorElement>) => void
}
