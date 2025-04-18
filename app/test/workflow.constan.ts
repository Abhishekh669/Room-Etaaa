import {Node, Edge} from "@xyflow/react"

export const initialNodes: Node[] = [
    {id: "1", data: {amount : 100}, type : "paymentInit", position: {x: 0, y: 0}, style: { width: 200, height: 100 }},
    {id: "2", type: "default", data: {}, position: {x: 0, y: 100}, style: { width: 200, height: 100 }},
]

export const initialEdges: Edge[] = [
    {id: "e1-2", source: "1", target: "2"},
]



