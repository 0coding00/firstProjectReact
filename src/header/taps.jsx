export default function Tap({children,buttons,ButtonContainer = "menu"}){
    return (
        <>
        <ButtonContainer>
        {buttons}
        </ButtonContainer>
        {children}
        </>
    );
}