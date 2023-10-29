// Modules
import { RefObject } from "react"

export interface IRoutes {
  routes: {
    anchor: string
    linkRef: RefObject<HTMLDivElement | undefined>
    title: string
  }[]
}

export interface INavbar extends IRoutes {}
