import React from 'react';  
import StylesComponent from "../Components/StylesComponent"
import { connect } from 'react-redux';

function Styles({allSongs}) {
 
      const stylesArr = allSongs && allSongs.map(song => song.style);
      const removeDuplicatedStyles = stylesArr.filter((data,index)=>{
        return stylesArr.indexOf(data) === index;
      })

      const styleEl = removeDuplicatedStyles.map(song => <StylesComponent key={song} style={song} />);

    return (
        <div> 
            {styleEl}
        </div>
    )
}

export default connect((globalState) => {
  return {
    allSongs: globalState.songs
  }
})(Styles);
