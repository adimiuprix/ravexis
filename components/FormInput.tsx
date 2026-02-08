import { forwardRef, useId, useMemo, useState } from 'react'

/* ==============================
   Types
================================ */
type FormInputProps = {
    id?: string
    label: string
    type?: React.HTMLInputTypeAttribute
    value: string
    placeholder?: string
    required?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void

    withPasswordToggle?: boolean
    withPasswordStrength?: boolean
}

/* ==============================
   Helpers
================================ */
type PasswordStrengthMeta = {
  label: 'Empty' | 'Weak' | 'Fair' | 'Good' | 'Strong'
  color: string
}

const calculatePasswordStrength = (value: string): number => {
    if (!value) return 0

    let score = 0

    score += Math.min(value.length * 5, 40)
    if (/[a-z]/.test(value)) score += 10
    if (/[A-Z]/.test(value)) score += 10
    if (/\d/.test(value)) score += 20
    if (/[^A-Za-z0-9]/.test(value)) score += 20

    return Math.min(score, 100)
}

const getPasswordStrengthMeta = (strength: number): PasswordStrengthMeta => {
    if (strength <= 0) return { label: 'Empty', color: 'bg-border' }
    if (strength <= 25) return { label: 'Weak', color: 'bg-red-500' }
    if (strength <= 50) return { label: 'Fair', color: 'bg-orange-500' }
    if (strength <= 75) return { label: 'Good', color: 'bg-yellow-500' }
    return { label: 'Strong', color: 'bg-green-500' }
}

/* ==============================
   Component
================================ */
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ id, label, type = 'text', value, placeholder, required, onChange, withPasswordToggle, withPasswordStrength }, ref) => {
    const autoId = useId()
    const inputId = id ?? autoId

    const isPassword = type === 'password'
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const strength = useMemo(
        () => (isPassword ? calculatePasswordStrength(value) : 0),
        [isPassword, value]
    )

    const { label: strengthLabel, color } = getPasswordStrengthMeta(strength)

    return(
        <div className="grid gap-2">
            {/* LABEL */}
            <label
                htmlFor={inputId}
                className="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1"
            >
                {label}
            </label>

            {/* INPUT */}
            <div className="relative">
                <input
                ref={ref}
                id={inputId}
                type={isPassword && showPassword ? 'text' : type}
                value={value}
                placeholder={placeholder}
                required={required}
                autoComplete={isPassword ? 'new-password' : 'off'}
                onChange={onChange}
                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 w-full min-w-0 border px-3 py-1 text-base shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-12 bg-white/5 border-white/10 rounded-2xl focus:ring-yellow-500/20 focus:border-yellow-500/40 transition-all pr-10"
                />

                {/* PASSWORD TOGGLE */}
                {isPassword && withPasswordToggle && (
                <button
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword(p => !p)}
                    className="inline-flex items-center justify-center absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-muted-foreground"
                >
                    {showPassword ? (
                    /* Eye Off */
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                    >
                        <path d="M2 2l20 20" />
                        <path d="M6.71 6.71A10.75 10.75 0 0 0 1.94 12a1 1 0 0 0 0 .7 10.75 10.75 0 0 0 15.42 5.15" />
                        <path d="M9.88 9.88a3 3 0 0 0 4.24 4.24" />
                    </svg>
                    ) : (
                    /* Eye */
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                    >
                        <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                    )}
                </button>
                )}
            </div>

            {/* PASSWORD STRENGTH */}
            {isPassword && withPasswordStrength && (
                <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Password Strength</span>
                    <span className="font-medium">{strengthLabel}</span>
                </div>

                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                    className={`h-full transition-all duration-300 ease-in-out ${color}`}
                    style={{ width: `${strength}%` }}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={strength}
                    />
                </div>

                <p className="text-xs text-muted-foreground">
                    Start with length (8+), then add numbers and symbols.
                </p>
                </div>
            )}
        </div>
    )
})

FormInput.displayName = 'FormInput'

export default FormInput
