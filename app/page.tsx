"use client"
import { useSocketStore } from '@/store/use-socket-io-store'
import React, { useEffect, useState } from 'react'

function MainPage() {
const {socket, connectSocket, disconnectSocket} = useSocketStore();

useEffect(()=>{
  if(socket?.connected)return;
  connectSocket()
  return () => disconnectSocket()
},[connectSocket, disconnectSocket])

console.log("this is the socket : ",socket)



  return (
    <div>
      hello world
    </div>
  )
}

export default MainPage
