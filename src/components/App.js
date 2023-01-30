import FlexContainer from "./FlexContainer";

function App() {
    return(
        <>
        <FlexContainer flexDirection='row' alignItems='stretch' justifyContent='center' backgroundColor='green'>
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
        </FlexContainer>

        <FlexContainer flexDirection='row' alignItems='stretch' justifyContent='center' backgroundColor='yellow'>
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
        </FlexContainer>
        </>
    )
}

export default App;