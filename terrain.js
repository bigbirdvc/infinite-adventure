/* Connected procedural regions: water first, roads second, settlements last. */
(function(root){'use strict';
const names=['Forest Trails','Winding River','River Valley','Twin Rivers','Lakeside','River Delta','Great Crossing','Woodland Ponds'];
function generate(s,w,random,integer){const W=36,H=24,R=()=>random(s),I=(a,b)=>integer(s,a,b),at=(x,y)=>w.tiles[y*W+x],inside=(x,y)=>x>0&&y>0&&x<W-1&&y<H-1;
const put=(x,y,t)=>{if(inside(x,y))w.tiles[y*W+x]=t};
w.layout=I(0,names.length-1);w.layoutName=names[w.layout];w.hubs=[];w.tiles=Array(W*H).fill(0);w.buildings=[];
for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(!inside(x,y))w.tiles[y*W+x]=2;
const vertical=(base,width,bend)=>{for(let y=1;y<H-1;y++){const left=base+Math.round(Math.sin(y/4)*bend);for(let x=left;x<left+width;x++)put(x,y,3)}};
const horizontal=(base,width)=>{for(let x=1;x<W-1;x++){const top=base+Math.round(Math.sin(x/6)*2);for(let y=top;y<top+width;y++)put(x,y,3)}};
const lake=(cx,cy,rx,ry)=>{for(let y=1;y<H-1;y++)for(let x=1;x<W-1;x++)if((x-cx)**2/rx**2+(y-cy)**2/ry**2<1)put(x,y,3)};
if(w.layout===1)vertical(I(7,25),I(2,4),I(1,3));
if(w.layout===2)horizontal(I(7,13),I(2,4));
if(w.layout===3){vertical(I(7,10),2,1);vertical(I(23,26),2,2)}
if(w.layout===4)lake(I(12,24),I(9,15),I(4,7),I(3,5));
if(w.layout===5){vertical(I(14,18),2,2);for(let y=9;y<H-1;y++){let x=17+Math.floor((y-9)*.7);put(x,y,3);put(x+1,y,3)}}
if(w.layout===6)horizontal(I(8,10),I(5,7));
if(w.layout===7)for(let i=0;i<I(3,5);i++)lake(I(5,30),I(4,19),I(2,4),I(1,3));
w.start={x:2,y:I(3,20)};w.exit={x:33,y:I(3,20)};if(w.layout===2||w.layout===6){w.start={x:I(4,31),y:2};w.exit={x:I(4,31),y:21}}
// Roads can span water but never overwrite a building. Bridge tiles remain bridges.
const paint=(x,y)=>put(x,y,[3,4].includes(at(x,y))?4:1);
function road(a,b){const queue=[[a.x,a.y]],seen=new Set([a.x+','+a.y]),parents=new Map();for(let i=0;i<queue.length;i++){const [x,y]=queue[i];if(x===b.x&&y===b.y){let p=[x,y];while(p){paint(...p);p=parents.get(p.join(','))}return true}const dirs=[[1,0],[-1,0],[0,1],[0,-1]].sort((u,v)=>(Math.abs(x+u[0]-b.x)+Math.abs(y+u[1]-b.y))-(Math.abs(x+v[0]-b.x)+Math.abs(y+v[1]-b.y)));for(const [dx,dy]of dirs){const xx=x+dx,yy=y+dy,key=xx+','+yy;if(inside(xx,yy)&&at(xx,yy)!==5&&!seen.has(key)){seen.add(key);parents.set(key,[x,y]);queue.push([xx,yy])}}}return false}
const count=I(2,6),kinds=['village','camp','tower','ruins','outpost'];
for(let i=0;i<count;i++){let best=null,bestScore=-Infinity;for(let n=0;n<150;n++){let x=I(5,30),y=I(5,18);if(at(x,y)===3)continue;let separation=w.hubs.length?Math.min(...w.hubs.map(h=>Math.abs(h.x-x)+Math.abs(h.y-y))):20;let land=0;for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)land+=at(x+dx,y+dy)!==3?1:0;let score=Math.min(separation,12)+land*.2+R()*4;if(separation>=7&&score>bestScore){best={x,y,kind:kinds[I(0,4)]};bestScore=score}}if(best)w.hubs.push(best)}
// A branching spanning tree joins the hubs; some regions add loops and extra crossings.
let connected=[w.start],pending=w.hubs.slice();while(pending.length){let best=0,anchor=connected[0],distance=Infinity;for(let i=0;i<pending.length;i++)for(const a of connected){let d=Math.abs(a.x-pending[i].x)+Math.abs(a.y-pending[i].y);if(d<distance){distance=d;best=i;anchor=a}}let h=pending.splice(best,1)[0];road(anchor,h);connected.push(h)}
let near=connected.reduce((a,b)=>Math.abs(a.x-w.exit.x)+Math.abs(a.y-w.exit.y)<Math.abs(b.x-w.exit.x)+Math.abs(b.y-w.exit.y)?a:b);road(near,w.exit);
if(R()<.65&&w.hubs.length>2){let a=w.hubs[I(0,w.hubs.length-1)],b=w.hubs[I(0,w.hubs.length-1)];road(a,b)}
for(const h of w.hubs){let target=I(1,h.kind==='village'?3:2),made=0;for(let tries=0;tries<80&&made<target;tries++){const kind=h.kind==='camp'?'tent':h.kind==='tower'?'tower':h.kind==='ruins'?'ruin':h.kind==='outpost'?'watchtower':made===0?'tavern':'cottage',width=3,height=kind==='tent'?2:kind==='tower'?4:3;let x=h.x+I(-5,3),y=h.y+I(-4,2);if(x<2||y<2||x+width>34||y+height>21)continue;let clear=true;for(let yy=y-1;yy<y+height+1;yy++)for(let xx=x-1;xx<x+width+1;xx++){if(at(xx,yy)===5)clear=false;if(xx>=x&&xx<x+width&&yy>=y&&yy<y+height&&at(xx,yy)!==0)clear=false}if(!clear)continue;const door={x:x+1,y:y+height};for(let yy=y;yy<y+height;yy++)for(let xx=x;xx<x+width;xx++)put(xx,yy,5);if(!road(door,h))throw Error('Building access failed');w.buildings.push({x,y,width,height,kind,door});made++}}
const clusters=Array.from({length:I(9,16)},()=>({x:I(2,33),y:I(2,21),r:I(2,5)}));for(let y=1;y<H-1;y++)for(let x=1;x<W-1;x++){if(at(x,y)!==0)continue;const nearRoad=[[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>[1,4].includes(at(x+dx,y+dy))),nearHub=w.hubs.some(h=>Math.abs(x-h.x)+Math.abs(y-h.y)<5),nearBuilding=w.buildings.some(b=>x>=b.x-1&&x<=b.x+b.width&&y>=b.y-1&&y<=b.y+b.height);if(!nearRoad&&!nearHub&&!nearBuilding&&clusters.some(c=>(x-c.x)**2+(y-c.y)**2<c.r*c.r)&&R()<.8)put(x,y,2)}
return w;
}
const api={generate,names};if(typeof module!=='undefined'&&module.exports)module.exports=api;root.Terrain=api;
})(typeof window!=='undefined'?window:globalThis);
