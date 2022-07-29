import React from 'react'
import { render } from 'react-dom'
import Toast from '../Toast'
type toastIconType = 'success' | 'error' | 'warn' | 'info'
interface openToastProps {
  type: toastIconType
  message?: string
}
const useToast = () => {
  const openToast = ({ ...props }: openToastProps) => {
    const { type, message = '' } = props
    return render(<Toast type={type} message={message} />, document.querySelector('#toast-root') as Element)
  }

  const closeToast = () => {
    return render(<></>, document.querySelector('#toast-root'))
  }

  return { openToast, closeToast }
}

export default useToast
