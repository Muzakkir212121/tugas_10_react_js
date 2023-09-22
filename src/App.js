import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Flag, Image, Header, Input, Icon, Divider, Label } from "semantic-ui-react";
function App() {
  return (
    <div>
      <Container>
        <Grid style={{ marginTop: "20px" }}>
          <Grid.Row>
            <Grid.Column width={4} style={{ textAlign: "right" }}>
              <Flag name="id" />
              <Icon name="angle left" style={{ marginLeft: "10px" }} />
              <Icon name="angle right" style={{ marginLeft: "10px" }} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Input fluid type="text" placeholder="Search..." icon={<Icon name="search" />} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as="h3">
                <Image circular src="https://react.semantic-ui.com/images/avatar/large/patrick.png" /> Patrick
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider horizontal>SELAMAT DATANG !!!!</Divider>

        <Label as="a" color="teal" tag>
          SPORT
        </Label>

        <Grid>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12} textAlign="center">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
