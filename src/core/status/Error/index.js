import { Button, Content, DangerIcon, Wrapper, Header } from "./styled";

export const Error = () => {
    return (
        <Wrapper>
            <DangerIcon/>
            <Header>
                Ooops! Somethink went wrong...
            </Header>
            <Content>
                Please check your network connection <br/>
                and try again
            </Content>
            <Button to="/">Back to homepage</Button>
        </Wrapper>
    );
};