export default function DynamicText( {text} ) {
  return <h3>{text || 'Dummy!'}</h3>
}