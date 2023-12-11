import { forwardRef, InputHTMLAttributes } from 'react'

import { TextRegular } from '../typograph'
import { InputContaineStyle, InputStyled, InputWrapper } from './styled'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  vacancies?: boolean
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, vacancies, ...props }, ref) => {
    return (
      <InputWrapper>
        <InputContaineStyle hasError={!!error} vacancies={vacancies}>
          <InputStyled ref={ref} {...props} />
        </InputContaineStyle>
        {error && (
          <TextRegular size="s" color="red">
            {error}
          </TextRegular>
        )}
      </InputWrapper>
    )
  },
)
