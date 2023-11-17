import React from 'react';
import {useParams} from 'react-router-dom';

import data from './data';
import './scss/WikiPage.scss';


function withUseParams(Component)
:(props)=>JSX.Element{
  return (function HooksComponent(props){
    const upCall = useParams();
    return <Component up={upCall} {...props}/>
  })
}


class WikiPage extends React.Component<{up},{}> {
  content = () => {
    if(this.props.up.pageName === undefined){
      this.props.up.pageName = 'React(라이브러리)'
    }

    for(const item of data){
      if(this.props.up.pageName === item.title){
        return item.content;
      };
    }
  }

  render(){
    document.title = this.props.up.pageName;
    return(
      <section>
        <h2>{this.props.up.pageName || 'React(라이브러리)'}</h2>
        {this.content()}
      </section>
    )
  }

}

export default withUseParams(WikiPage);