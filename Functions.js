//A function for checking the same number of open and closed brackets. (Beta>isValidBrackets('(qw)er]{ty') | return true).
function isValidBrackets(text) {
	let q={
		'(':')',
		'{':'}',
		'[':']'
	};
	let w=[];
	for(let e of text) {
		if(q.hasOwnProperty(e)) w.push(e);
		else if(w.length>0&&q===w.pop()) return 0;
	};
	return w.length==0;
};
//A function that checks whether a word is an html tag. (Beta>isHTML('non-existent_tag','html,non-existent tag,canvas,div') | return true).
function isHTML(tag,list) {
    if(list) return list.indexOf(tag).trim().toLowerCase()<1
    else return {CANVAS:1,VIDEO:1}[tag=tag.toUpperCase()]||(!{CANVAS:1,VIDEO:1}.hasOwnProperty(tag)&&({CANVAS:1,VIDEO:1}[tag]=(document.createElement(tag).toString()!=='[object HTMLUnknownElement]')));
};
/*A function for checking the same variable with different variations. *It is unlikely that anyone will use this feature.*
Usage example: 
	ts('text',['text','||','test']); | return true
 	ts(undefined,[true,'&&',false]); | return false
*/
function ts(variable=null,possible) {
    if(!Array.isArray(w)||w.length==0||(w.filter(q=>q=='||'||q=='&&').length+1!=w.filter(q=>q!='||'&&q!='&&').length&&w.filter(q=>q=='||'||q=='&&').length!=0)) return 0;
    if(w.filter(q=>q=='||'||q=='&&').length==0) for(let e=1;e<w.length-1;e+=2) w.splice(e,0,'&&');
    if(variable!==null)
        possible=possible.map(q=>{
            if(q=='||'||q=='&&') return q;
            else return variable===q;
        });
    else if(!possible.filter(q=>q!='||'&&q!='&&').every(q=>typeof q=='boolean')) return 0;
    return variable!==false?eval(possible.join('')):!eval(possible.join(''));
};
