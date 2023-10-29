// Modules
import { RefObject } from "react"

export interface IRoutes {
  routes: {
    anchor: string
    title: string
  }[]
  handleScrollTo: () => void
}

export interface INavbar extends IRoutes {}
