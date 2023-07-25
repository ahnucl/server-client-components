'use client'

import { useContext } from "react"
import { DialogContext } from "../contexts/DialogContext"

export function Dialog() {
  const { open, toggle } = useContext(DialogContext)

  console.log(open)

  return (
    <>
      {open && (
        <div className="w-10 h-10 bg-red-500">
          Dialog
        
        </div>
      )}
      <button onClick={toggle}>Toggle</button>
    </>
  )
}