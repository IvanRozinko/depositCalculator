import React from 'react'
import { OutlinedInput, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  input: {
    width: 100,
    fontSize: 18
  }
})
interface Props {
  sum: number,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function TextInput({ sum, handleInputChange }: Props ) {
  const styles = useStyle();
  return (
    <OutlinedInput 
      className={styles.input}
      value={sum}
      fullWidth
      onChange={handleInputChange}
    />
  )
}

export default TextInput
