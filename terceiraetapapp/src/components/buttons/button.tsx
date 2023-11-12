import './button.css';

interface ButtonProps{
    insideText: string,
    className: string
}

export default function Button({insideText, className}:ButtonProps){
    return(
        <button type="submit" className={className}>{insideText}</button>
    );
}