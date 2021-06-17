import React, { useState } from 'react'
import { Tooltip, makeStyles } from '@material-ui/core';
import Help from '@material-ui/icons/HelpOutline';

const useStyle = makeStyles({
  ml: {
    marginLeft: 8,
    fontSize: 20,
  }
})
function IconTooltip() {
  const [ open, setOpen ] = useState(false);
  const styles = useStyle();

  const handleClick = () => {
    if (!open) {
      setOpen(true);
      setTimeout( () => setOpen(false), 1000);
    }
  }
  return (
    <Tooltip
      open={open}
      title='Загальна ставка оподаткування 19,5 % (18% податок + 1,5 % військовий збір)'
    >
      <Help 
        className={styles.ml}
        color='primary'
        onClick={handleClick}
      />
    </Tooltip>
  )
}

export default IconTooltip
