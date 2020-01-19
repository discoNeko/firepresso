import React, { Component, PropTypes } from 'react';

class TwitterButton extends React.Component {
    render() {
      return <a href="https://twitter.com/share" className="twitter-share-button">Tweet</a>
    }
  
    // componentDidMount() {
    //   // scriptタグが埋め込まれた後にTwitterのaタグが置かれても機能が有効にならないので、すでにscriptタグが存在する場合は消す。
    //   var scriptNode = document.getElementById('twitter-wjs')
    //   if (scriptNode) {
    //     scriptNode.parentNode.removeChild(scriptNode)
    //   }
  
    //   // ボタン機能の初期化（オフィシャルのボタン生成ページで生成されるものと同じもの）
    //   !function(d,s,id){
    //     var js,
    //         fjs=d.getElementsByTagName(s)[0],
    //         p=/^http:/.test(d.location)?'http':'https';
    //     if(!d.getElementById(id)){
    //       js=d.createElement(s);
    //       js.id=id;
    //       js.src=p+'://platform.twitter.com/widgets.js';
    //       fjs.parentNode.insertBefore(js,fjs);
    //     }
    //   }(document, 'script', 'twitter-wjs');
    // }
  }

export default TwitterButton;