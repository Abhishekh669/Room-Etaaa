import { NodeProps } from '@xyflow/react'
import React from 'react'

type PaymentNodeData = {
  amount: number
}

function PaymentInit({
  data: { amount },
}: NodeProps<PaymentNodeData>) {
  return (
    <div>
      {amount}
    </div>
  )
}

export default PaymentInit