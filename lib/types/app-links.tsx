import { IconBaseProps } from "react-icons"
import { LinkType } from "./link-types"

export interface AppLinks {
    label: string
    baseUrl: string
    type: LinkType
    icon?: React.ComponentType<IconBaseProps>
}