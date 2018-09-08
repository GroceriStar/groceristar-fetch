const React         = require('react');
// const CompLibrary   = require('../../../core/CompLibrary.js');
// const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
// const Container     = CompLibrary.Container;
// const GridBlock     = CompLibrary.GridBlock;

const Component       = React.Component;

// const Block = props => (
//   <Container
//     padding={['bottom', 'top']}
//     id={props.id}
//     background={props.background}>
//     <GridBlock align="left" contents={props.children} layout={props.layout} />
//   </Container>
// );

class Block extends Component {

  constructor(props) {
      super(props);
  }

  render(){
    return(
      <Container
        padding={['bottom', 'top']}
        id={this.props.id}
        background={this.props.background}>
        <GridBlock align="left" contents={this.props.children} layout={this.props.layout} />
      </Container>
    );
  }

}

module.exports = Block;
