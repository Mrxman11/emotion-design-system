import React, { useEffect, useRef, useState } from 'react'
import './Textarea.css'

type State = 'neutral' | 'error' | 'validated'

type Props = {
  id?: string
  label?: string
  value?: string
  defaultValue?: string
  onChange?: (v: string) => void
  placeholder?: string
  rows?: number
  state?: State
  errorMessage?: string
  validatedMessage?: string
  helperText?: string
  className?: string
}

export default function Textarea({
  id,
  label,
  value,
  defaultValue,
  onChange,
  placeholder,
  rows = 4,
  state = 'neutral',
  errorMessage,
  validatedMessage,
  helperText,
  className,
}: Props) {
  const genIdRef = useRef(id ?? `textarea-${Math.random().toString(36).slice(2, 9)}`)
  const cid = genIdRef.current
  const [internal, setInternal] = useState<string>(defaultValue ?? '')

  useEffect(() => {
    if (typeof value === 'string') setInternal(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = e.target.value
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  const isError = state === 'error'
  const isValid = state === 'validated'

  return (
    <div className={`textarea-atom ${className ?? ''} textarea-atom--${state}`}>
      {label ? (
        <label htmlFor={cid} className="textarea-atom__label">
          {label}
        </label>
      ) : null}

      <textarea
        id={cid}
        className="textarea-atom__control"
        rows={rows}
        placeholder={placeholder}
        value={value === undefined ? internal : value}
        onChange={handleChange}
        aria-invalid={isError}
        aria-describedby={isError ? `${cid}-error` : isValid ? `${cid}-validated` : helperText ? `${cid}-helper` : undefined}
      />

      <div className="textarea-atom__meta">
        {isError ? (
          <div id={`${cid}-error`} className="textarea-atom__error" role="alert">
            {errorMessage ?? 'There is an error with your input.'}
          </div>
        ) : isValid ? (
          <div id={`${cid}-validated`} className="textarea-atom__validated">
            {validatedMessage ?? 'Looks good.'}
          </div>
        ) : helperText ? (
          <div id={`${cid}-helper`} className="textarea-atom__helper">{helperText}</div>
        ) : null}
      </div>
    </div>
  )
}
