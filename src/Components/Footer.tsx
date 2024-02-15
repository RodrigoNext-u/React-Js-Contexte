type Props = {
    onClick: () =>void;
}

const Footer = ({onClick}: Props) => {

    return (
        <div onClick = {onClick}>
            Footer
        </div>
    )
}

export default Footer