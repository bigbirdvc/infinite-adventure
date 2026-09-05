/* Character appearance and player-facing narration. No dependencies. */
(function(root){'use strict';
const classes=['Knight','Elf','Mage'],parts=['head','body','arms','legs','weapon','accent'];
function roll(random=Math.random){return Object.fromEntries(parts.map(p=>[p,'#'+Math.floor(random()*16777216).toString(16).padStart(6,'0')]))}
function valid(p){return p&&typeof p.name==='string'&&p.name.trim().length>0&&p.name.length<=24&&classes.includes(p.class)&&parts.every(k=>/^#[0-9a-f]{6}$/i.test(p.colours?.[k]))}
function narrate(text,p){if(!p)return String(text);const name=p.name,pos=name+(name.endsWith('s')?'’':'’s');return String(text).replace(/\b(?:our wanderer|the adventurer|the wanderer)\b/gi,()=>name).replace(/\bhimself\b/gi,()=>name).replace(/\bhis\b/gi,()=>pos).replace(/\b(?:he|him)\b/gi,()=>name)}
function draw(c,p,x=0,y=0){const a=p.colours,r=(xx,yy,w,h,col)=>{c.fillStyle=col;c.fillRect(x+xx,y+yy,w,h)};r(5,29,25,3,'#102c2350');r(10,23,5,8,a.legs);r(20,23,5,8,a.legs);r(9,13,17,12,a.body);r(6,14,4,11,a.arms);r(25,14,4,11,a.arms);r(12,5,12,10,'#e4bb92');r(20,10,2,2,'#23332d');
if(p.class==='Knight'){r(10,3,16,7,a.head);r(10,8,3,8,a.head);r(23,8,3,8,a.head);r(15,0,5,4,a.accent);r(4,17,7,11,a.accent);r(28,7,3,18,a.weapon);r(25,24,9,3,a.accent);r(28,27,3,5,a.weapon)}
if(p.class==='Elf'){r(9,3,17,5,a.head);r(7,6,22,3,a.head);r(8,10,5,3,'#e4bb92');r(23,10,5,3,'#e4bb92');r(9,14,3,12,a.accent);r(17,0,3,5,a.accent);r(28,9,2,20,a.weapon);r(30,12,2,14,a.weapon);r(26,8,2,2,a.weapon);r(26,28,2,2,a.weapon);r(26,11,1,17,'#d8d7b1')}
if(p.class==='Mage'){r(10,19,16,10,a.body);r(8,26,20,4,a.body);r(9,7,18,3,a.head);r(12,3,12,5,a.head);r(15,0,7,4,a.head);r(15,13,3,15,a.accent);r(29,10,3,21,a.weapon);r(26,3,8,8,a.accent);r(28,5,3,3,'#e9e2bf')}
}
const api={classes,parts,roll,valid,narrate,draw};if(typeof module!=='undefined'&&module.exports)module.exports=api;root.Character=api;
})(typeof window!=='undefined'?window:globalThis);
