import './headerSection.css'

type HeaderSectionProps = {
  showTaskInput: ()=> void;
}
const HeaderSection = (props: HeaderSectionProps) => {
  return <nav className='headerSection'>
    <h1>NoteBulk</h1>
    <button className='secondary' onClick={props.showTaskInput}>New note</button>
  </nav>
}

export default HeaderSection