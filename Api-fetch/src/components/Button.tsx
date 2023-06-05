import {DoubleArrow,ArrowRight} from '@mui/icons-material';

export default function Button(props:any) {
    const combineClasses = `btn-defult ${props.anyOtherXlass} `
  return (
    <>
      <div className={combineClasses} id={props.btnId}>
        <a href={props.refText}>
            <span className='startIco'><DoubleArrow /></span> 
            <span className='btn_txt'>{props.buttonText}</span> 
            <span className='LastIco'><ArrowRight /></span> 
        </a></div>
    </>
  )
}
