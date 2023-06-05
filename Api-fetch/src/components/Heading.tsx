
export default function Heading(props: any) {
    const combineHdClasses = `default_hdTheme ${props.extraClassHd}`
    const comboHdClas = `mainHeading ${props.pages_cusClass}`;
  return (
    <>
      <div className={comboHdClas}>
        <h1 className={combineHdClasses}><span>{props.upperHd}</span> {props.innerHd}</h1>
      </div>
    </>
  )
}
