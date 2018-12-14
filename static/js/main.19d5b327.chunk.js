(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(28)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(9),l=n.n(i),o=(n(16),n(1)),c=n(2),u=n(5),s=n(4),d=n(6),y=(n(18),n(20),function(e){var t=e.gameState,n=e.onNewGameClicked;return a.a.createElement("header",{className:"AppHeader navbar navbar-expand-lg navbar-dark bg-dark"},a.a.createElement("div",{className:"navbar-brand"},"Match ",t.winCondition,"!"),a.a.createElement("ul",{className:"navbar-nav"},a.a.createElement("li",{className:"nav-item"},a.a.createElement("button",{className:"btn btn-primary",onClick:n},"NEW GAME"))))}),m=n(3),b=n(7),h=[[0,1],[1,1],[1,0],[-1,1]],f=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"findStraightLine",value:function(e){var t=e.board,n=e.x,r=e.y,a=e.requiredLength;if(!C.isCellEmpty(t,n,r)){var i=C.getSymbolAt(t,n,r);return h.map(function(e){var a=function e(t){var n=t.board,r=t.x,a=t.y,i=t.symbol,l=t.direction;var o={x:r+l[0],y:a+l[1]};if(!C.isCellValid(n,o.x,o.y)||C.getSymbolAt(n,o.x,o.y)!==i)return{x:r,y:a};return e({board:n,x:o.x,y:o.y,symbol:i,direction:l})}({board:t,x:n,y:r,symbol:i,direction:e});return function e(t){var n=t.board,r=t.x,a=t.y,i=t.symbol,l=t.direction;if(!C.isCellValid(n,r,a)||C.getSymbolAt(n,r,a)!==i)return[];return[{x:r,y:a}].concat(e({board:n,x:r+l[0],y:a+l[1],symbol:i,direction:l}))}({board:t,x:a.x,y:a.y,symbol:i,direction:l(e)})}).find(function(e){return e.length>=a})}function l(e){return[-e[0],-e[1]]}}}]),e}();function v(e,t){return{width:e,height:t,cells:new Array(e*t).fill(null)}}function g(e,t,n){return p(e,t,n)||function(e,t,n){throw new Error("tried to access invalid cell (".concat(t,",").concat(n,"); expected coordinates from (0,0) ")+"to (".concat(e.width,", ").concat(e.height,")"))}(e,t,n),e.cells[t*e.width+n]}function p(e,t,n){return t<e.width&&t>=0&&n<e.height&&n>=0}function w(e,t,n){return null===g(e,t,n)}var C={clear:function(e){return v(e.width,e.height)},create:v,placeSymbol:function(e,t,n,r){if(!w(e,t,n))throw new Error('Cannot place "'.concat(r,'" into cell (').concat(t,",").concat(n,"), ")+'it already contains "'.concat(this.getSymbolAt(e,t,n),'"'));var a=Object(b.a)({},e);return a.cells=Object(m.a)(a.cells),a.cells[t*e.width+n]=r,a},getSymbolAt:g,isCellValid:p,isCellEmpty:w,findStraightLine:function(e){var t=e.board,n=e.x,r=e.y,a=e.requiredLength;return f.findStraightLine({board:t,x:n,y:r,requiredLength:a})}},k=(n(22),function(e){var t=e.player;return a.a.createElement("span",{style:{color:t.color}},t.symbol)}),E=function(e){var t=e.owner,n=e.highlighted,r=e.onClick,i=e.clickable;return a.a.createElement("td",{className:function(){var e=[];return e.push(i?"clickable":"not-clickable"),n&&e.push("highlighted"),e.join(" ")}(),onClick:r},t?a.a.createElement(k,{player:t}):null)},S=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"startNewGame",value:function(e){return{board:C.create(e.width,e.height),players:e.players,currentPlayerIndex:0,winner:void 0,winningLine:void 0,winCondition:e.winCondition}}},{key:"getColorOfSymbol",value:function(e,t){var n=this.getPlayerBySymbol(e,t);return n?n.color:"black"}},{key:"getPlayerBySymbol",value:function(e,t){return e.players.find(function(e){return e.symbol===t})}},{key:"getCurrentPlayer",value:function(e){return e.players[e.currentPlayerIndex]}},{key:"isValidPlay",value:function(e,t,n){return C.isCellEmpty(e.board,t,n)}},{key:"isGameOver",value:function(e){return void 0!==e.winner}},{key:"isCellOnWinningLine",value:function(e,t,n){return!!this.isGameOver(e)&&e.winningLine.some(function(e){var r=e.x,a=e.y;return t===r&&n===a})}},{key:"makePlay",value:function(t,n,r){if(this.isGameOver(t))throw new Error("Cannot make play at ".concat(n,":").concat(r,", the game is over!"));var a=this.getCurrentPlayer(t),i=C.placeSymbol(t.board,n,r,this.getCurrentPlayer(t).symbol),l=void 0,o=t.currentPlayerIndex,c=C.findStraightLine({board:i,x:n,y:r,requiredLength:t.winCondition});return c?l=a:o=function(t){return e.isGameOver(t)?t.currentPlayerIndex:(t.currentPlayerIndex+1)%t.players.length}(t),Object(b.a)({},t,{board:i,currentPlayerIndex:o,winner:l,winningLine:c})}}]),e}(),O=(n(24),function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).render=function(){var e=n.props.gameState,t=Object(m.a)(Array(e.board.height).keys());return a.a.createElement("div",{className:"GameGrid",style:{borderColor:S.getCurrentPlayer(e).color}},a.a.createElement("table",null,a.a.createElement("tbody",null,t.map(function(e){return n.renderRow(e)}))))},n.renderRow=function(e){var t=n.props.gameState.board,r=Object(m.a)(Array(t.width).keys());return a.a.createElement("tr",{key:e},r.map(function(t){return n.renderCell(e,t)}))},n.renderCell=function(e,t){var r=n.props.gameState,i=C.getSymbolAt(r.board,t,e),l=S.getPlayerBySymbol(r,i);return a.a.createElement(E,{key:t,owner:l,clickable:C.isCellEmpty(r.board,t,e)&&!S.isGameOver(r),highlighted:S.isCellOnWinningLine(r,t,e),onClick:function(){return n.props.onCellSelected(t,e)}})},n}return Object(d.a)(t,e),t}(r.Component)),x=(n(26),function(e){var t=e.gameState;return a.a.createElement("div",{className:"GameStateMessage card"},a.a.createElement("div",{className:"card-body"},S.isGameOver(t)?a.a.createElement("span",null,"Game Over! The winner is ",a.a.createElement(k,{player:t.winner})):a.a.createElement("span",null,"Place ",a.a.createElement(k,{player:S.getCurrentPlayer(t)}),"!")))}),P={width:20,height:20,players:[{symbol:"\u2573",color:"blue"},{symbol:"\u25ef",color:"red"}],winCondition:5};function j(){return S.startNewGame(P)}var G=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state=j(),n.onCellSelected=function(e,t){!S.isGameOver(n.state)&&S.isValidPlay(n.state,e,t)&&(console.info("Player ".concat(S.getCurrentPlayer(n.state).symbol," making play at (").concat(e,",").concat(t,")")),n.setState(S.makePlay(n.state,e,t)))},n.startNewGame=function(){n.setState(j())},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(y,{gameState:this.state,onNewGameClicked:this.startNewGame}),a.a.createElement(O,{gameState:this.state,onCellSelected:this.onCellSelected}),a.a.createElement(x,{gameState:this.state}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.19d5b327.chunk.js.map