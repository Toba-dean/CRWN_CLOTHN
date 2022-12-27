import { GroupContainer, InputContainer, LabelContainer } from "./forminput.styles";

const FormInput = ({ handleChange, label, ...restProps }) => {
  return (
    <GroupContainer>
      <InputContainer
        onChange={handleChange}
        {...restProps}
      />

      {
        label ? (
          <LabelContainer className={`${restProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
          </LabelContainer>
        ) : null
      }
    </GroupContainer>
  )
}

export default FormInput
