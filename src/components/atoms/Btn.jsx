import './Btn.css'

function Btn({text, background, color}) {
    return (
        <button
        className='CustomButtonClass'
        style={{
            background: background,
            border: `solid ${background} 1px`,
            color: color}}
        >{text}</button>
    );
}

export default Btn;