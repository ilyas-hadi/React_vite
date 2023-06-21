import {DoubleArrow,ArrowRight} from '@mui/icons-material';
import { Link } from 'react-router-dom';
export default function Button(props:any) {
    const combineClasses = `btn-defult ${props.anyOtherXlass} `
  return (
    <>
      <div className={combineClasses} id={props.btnId}>
        <Link to={props.refText}>
            <span className='startIco'><DoubleArrow /></span> 
            <span className='btn_txt'>{props.buttonText}</span> 
            <span className='LastIco'><ArrowRight /></span> 
        </Link></div>
    </>
  )
}
