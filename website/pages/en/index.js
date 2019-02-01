/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

// https://raw.githubusercontent.com/GroceriStar/creative/master/illustrations/Vegetables_Tomato%20(1).png

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">
        {props.children}
      </div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>
    {siteConfig.tagline}
    </small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">
      {props.children}
      </div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('LOGO1.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

// const Block = props => (
//   <Container
//     padding={['bottom', 'top']}
//     id={props.id}
//     background={props.background}>
//     <GridBlock align="left" contents={props.children} layout={props.layout} />
//   </Container>
// );

const MainPage = props => (
  <div
    className="showcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
      <div className = "tableofcontents">
      <p>
      Food Tech related static data in json arrays, like recipes, ingredients, recipes, diets, allergies, etc.
      </p>
      <p>
      In a few our projects we have a similar files. And we always copy-paste code between them. So by moving this code into separated place - i hope we'll make our projects better.
      </p>
      </div>
  </div>
);

const FeatureCallout = props => (
  <div
    className="showcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Table of contents</h2>
      <div className = "tableofcontents" style={{margin: '0px 150px'}}>

        <ul>
          <li>
            <a href="/groceristar-fetch/docs/intro.html">Getting Started</a>
          </li>
          <li>
            <a href="/groceristar-fetch/docs/chickenkyiv-project.html">ChickenKyiv</a>
          </li>
          <li>
            <a href="/groceristar-fetch/docs/groceristar-project.html">Groceristar</a>
          </li>
          <li>
            <a href="/groceristar-fetch/docs/mealcalendar-project.html">Meal Calendar</a>
          </li>
          <li>
            <a href="/groceristar-fetch/docs/searchapi-project.html">Search API</a>
          </li>
          <li>
            <a href="/groceristar-fetch/docs/searchform-project.html">Search Form</a>
          </li>
          <li><a href="/groceristar-fetch/docs/GraphQL.html">GraphQL</a></li>
          <li><a href="/groceristar-fetch/docs/Selector.html">Selector</a></li>
          <li>
            <a href="/groceristar-fetch/docs/stretch-goals.html">Stretch goals</a>
          </li>
          <li>
            <a href="/groceristar-fetch/docs/tests.html">Tests</a>
          </li>
        </ul>
      </div>

  </div>
);

const FeatureCallout2 = props => (

  <div className = "ogg" style={{textAlign: 'left'}}>
    <div className="wrapper">
      <div className="gridBlock">
        <div className="blockElement imageAlignSide imageAlignLeft twoByGridBlock">
          <div className="blockImage">
            <img src="/recipe-app-react-native/img/54A84DCB-F7EE-49E3-8DA1-1EF07F873622.png">

            </img>
          </div>
          <div className="blockContent"><h2><div><span><p>Description</p>
    </span></div></h2><div><span><p>
        Build with: Angular, Ionic Framework v.1
      <ul>
        <h3>Basic functionality:</h3>
        <li>Screen with recipes list</li>
        <li>Recipe details</li>
        <li>Basic grocery list</li>
        <li>Login screen.</li>
    </ul>
      </p>
    </span></div></div></div>
      </div>
    </div>
  </div>
);


class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">

          <Container padding={['bottom']}>
            <MainPage />
            <FeatureCallout />
          </Container>

        </div>
      </div>
    );
  }
}

module.exports = Index;
