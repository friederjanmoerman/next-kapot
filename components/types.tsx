// Modules
import { RefObject } from 'react'

export interface RoutesProps {
  routes: {
    anchor: string
    title: string
    linkRef: RefObject<HTMLDivElement | undefined>
  }[]
  handleScrollTo: (event: React.MouseEvent<HTMLAnchorElement>) => void
}
