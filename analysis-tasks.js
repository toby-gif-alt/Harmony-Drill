/* Source-grounded grouped analysis tasks. These are practice components, not official NZQA grades. */
(function(){
const Q=window.QUESTIONS, byNum=new Map(Q.map(q=>[Number(q.id.split('-')[1]),q]));
const get=n=>{const q=byNum.get(n);if(!q)throw Error('Unknown source drill '+n);return q};
const part=(label,answer,wrong)=>({label,answer,options:[answer,...wrong]});
const from=(n,label)=>{const q=get(n);return {label:label||q.question,answer:q.answer,options:q.options}};
const tasks=[];
function add(ids,prompt,parts,model,extra={}){
 const sources=ids.map(get),base=sources[0];
 tasks.push({...base,id:'apply-'+ids.join('-'),sourceIds:ids,schedulePages:[...new Set(sources.map(q=>q.schedule))].sort((a,b)=>a-b),topics:[...new Set(sources.map(q=>q.topic))],question:prompt,parts,model:model||[...new Set(sources.map(q=>q.model))].join('\n\n'),...extra});
}
const tonalGroups=[
 [14,15,16,'X','G major'],[17,18,19,'Y','G major'],[20,21,22,'Z','G major'],
 [31,32,33,'X','A major'],[34,35,36,'Y','A major'],[37,38,39,'Z','A major'],
 [41,42,43,'X','C major'],[44,45,46,'Y','C major'],[47,48,49,'Z','C major'],
 [54,55,56,'X','G minor'],[57,58,59,'Y','G minor'],[60,61,62,'Z','G minor'],
 [66,67,68,'X','C major'],[69,70,71,'Y','C major'],
 [76,77,78,'X','G major'],[79,80,81,'Y','G major'],[82,83,84,'Z','G major']
];
for(const [k,e,r,section,tonic] of tonalGroups){
 const evidence=from(e,get(e).topic==='Cadences'?'Cadence evidence':'Musical evidence');
 const relationship=from(r,'Relationship to '+tonic);
 if(r===84)relationship.accepted=['Supertonic minor'];
 add([k,e,r], 'Focus on section '+section+'. Identify its key, provide musical evidence for your answer, and describe its relationship to the tonic ('+tonic+').',
 [from(k,'Tonal centre'),evidence,relationship],get(k).model);
}
add([1],'Identify the key at the end of the first section (bars 15 and 16), and explain the function of the G-sharp in the final chord. For this practice item, use the E-minor interpretation.',[
 part('Quality and root of the final chord','E major',['E minor','A major','G major']),from(1,'Function of G-sharp')],null,{examQuestion:'Identify the key at the end of the first section (bars 15 and 16, highlighted on the score), and explain the function of the G♯ in the final chord.'});
add([2,3],'Identify the keys of Y and Z and describe their relationships to the specified keys (Y to X, Z to Y). Section X is A minor.',[
 part('Key Y','A major',['A minor','C major','E major']),from(2,'Relationship of Y to X'),part('Key Z','E major',['E minor','D major','F-sharp minor']),from(3,'Relationship of Z to Y')]);
add([4,5],'Identify the keys of Y and Z and describe the relationship of each to the tonic key of B-flat major.',[
 part('Key Y','F major',['F minor','E-flat major','G minor']),from(4,'Relationship of Y to B-flat major'),part('Key Z','G minor',['G major','D minor','E-flat major']),from(5,'Relationship of Z to B-flat major')]);
add([6,7,8],'Focus on the progressions labelled Y and Z. Identify the two new keys and describe the relationship of Y to the opening E major (additional practice).',[from(6,'Key Y'),from(7,'Key Z'),from(8,'Relationship of Y to E major')],null,{examQuestion:'Focus on the progressions bracketed and labelled Y and Z. Identify the two new keys that the piece passes through.'});
add([9],'Describe the harmonic rhythm of the waltz, including its change near the return to the tonic.',[
 part('Usual chord duration','One bar',['Two bars','One beat','Half a bar']),part('Change at bar 8','The rate of chord changes increases',['The rate decreases','The rate remains constant','The metre changes'])]);
add([10,11,12],'Analyse the modulation to F major in bars 7–8 and return to G minor at bar 9. Include evidence and key relationship.',[
 from(10,'Evidence for F major'),from(11,'Relationship of F major to G minor'),from(12,'Evidence for return to tonic')]);
add([13],'Describe the selection and use of chords, including the role of first inversions.',[
 part('Main chord selection','Simple triads, generally I, IV and V',['Mainly augmented triads','Mainly diminished sevenths','Only suspended chords']),from(13,'Role of first inversions')]);
add([23],'Describe the harmonic rhythm, including its change at bar 7 and the musical context of that change.',[
 part('Usual rate','One chord per bar',['One chord every two bars','One chord per beat','Two chords per beat']),part('Rate in bar 7','One chord per beat',['One chord per bar','One chord every two bars','Two chords per beat']),part('Context of the acceleration','Approaching the cadence at the end of the phrase',['Beginning a new metre','Sustaining the opening tonic pedal','Avoiding the phrase ending'])]);
add([24,25,26],'Analyse the tonal centres of bars 1–8 and explain how the key relationships and sequences contribute to the passage.',[from(24,'Sequence of tonal centres'),from(25,'Significance of the tonic pitches'),from(26,'Relationship of sequence to modulation')]);
add([27,28],'Describe the harmonic rhythm and explain the effect of its variety.',[from(27,'Pattern of harmonic rhythm'),from(28,'Musical effect')]);
add([29,30],'Analyse the tonality of Daydream, including the tonal centres and the use of seventh chords.',[
 from(29,'Tonal centres'),from(30,'Role of seventh chords'),part('Cadential evidence','V7–I at bars 2–3, 7–8 and 8–9',['IV–I at bars 2–3, 7–8 and 8–9','V–vi at every phrase ending','No cadential evidence of modulation'])]);
add([40],'Explain the function of the D natural in bar 13.',[
 part('Chord membership','Seventh of the E major chord',['Third of the E major chord','Fifth of the E major chord','Leading note of E major']),part('Tonal implication','Hints at a perfect cadence in A major',['Confirms E minor as tonic','Establishes D minor immediately','Creates a plagal cadence in C major'])]);
add([50,51],'Compare the harmonic rhythm and harmony of variation 11 with the theme, including the bass pedal.',[
 from(50,'Comparison of harmonic rhythm'),part('Evidence of the rhythmic comparison','No increase before cadence points in bars 3–4 / 7–8; fewer suspensions',['Increased rate at both cadence points; more suspensions','No chord changes in either passage','The rate is doubled throughout']),from(51,'Effect of bass pedal')]);
add([52,53],'Explain how variation 14 retains a relationship with the theme while changing the tonality.',[
 from(52,'Harmonic rhythm'),from(53,'Key relationship'),part('Effect of changed key and slow tempo','Expressive, peaceful mood',['A consistently agitated mood','An increase in chromatic instability throughout','An abrupt change to a fast dance'])]);
add([63],'Identify a compositional device used and explain its function in the extract.',[
 part('Device','Tonic pedal in the bass',['Dominant pedal in the bass','Ascending chromatic sequence','Melodic inversion']),part('Tonal function','Establishes C major',['Establishes G minor','Establishes E major','Removes a sense of tonic']),part('Harmonic effect','Creates dissonance and harmonic interest',['Removes all dissonance','Prevents harmony from changing','Replaces the cadence with a tempo change'])]);
add([64],'Explain why the composer has added an F-sharp to the chord at the beginning of bars 9 and 10. Provide musical evidence in your response.',[
 part('Chord quality created','Major seventh',['Dominant seventh','Diminished seventh','Minor seventh']),part('Function or effect','Adds tension and complexity; unusual on the tonic',['Makes the tonic triad minor','Eliminates tension before a cadence','Turns the chord into an unaltered triad'])]);
add([65],'Discuss the tonality of Extract Seven, providing evidence. In Apply mode, use the E-minor interpretation; in Exam Ready, either supported interpretation is acceptable.',[
 part('E-minor interpretation: main key','E minor',['E major','G minor','B minor']),part('Supporting evidence','Dominant and tonic chords; perfect cadence in bars 19–21',['Key signature alone','Plagal cadence in bars 19–21','Perfect cadence in G major at the end'])],null,{examQuestion:'Discuss the tonality of Extract Seven, providing specific musical evidence. Either supported tonal interpretation is acceptable.'});
add([72],'Explain the function of the diminished 7th chord in this extract.',[
 part('Harmonic role','Embellishes the dominant',['Embellishes a sustained tonic only','Substitutes for the subdominant without resolution','Creates a tonic pedal']),part('Cadential effect','Decorates or strengthens the perfect cadence',['Creates an interrupted cadence','Prevents any resolution','Changes the metre'])]);
add([73],'Explain how the modulation to A major is reinforced, providing musical evidence.',[
 part('Bass evidence','A in the bass',['F-sharp in the bass','C-natural in the bass','E-flat in the bass']),part('Chord evidence','Tonic and dominant seventh chords',['Only diminished triads','An unchanged tonic chord','Only subdominant chords']),part('Modulation method','Direct move to relative major without a pivot chord',['Pivot chord to tonic minor','Direct move to the dominant minor','No change of tonal centre'])]);
add([74,75],'Discuss the change of harmonic rhythm and the harmonic device in bars 24–28, including their musical effects.',[
 part('Rate of harmonic change','One chord per bar',['One chord every four bars','One chord per beat throughout','No chord changes']),part('Effect of harmonic rhythm','More momentum and forward direction',['More stasis','Change of metre','Slower tempo']),part('Harmonic device','Descending chromatic bass line',['Ascending diatonic bass','Tonic pedal','Repeated melodic ostinato']),part('Effect of device','Contrast with the more static preceding bass',['Repeats the previous bass exactly','Eliminates all harmonic motion','Introduces a new time signature'])]);
add([85],'Identify a harmonic / tonal feature used in this extract and explain its function.',[
 part('One accepted feature','Contrary chromatic motion',['Parallel whole-tone motion','Static tonic pedal','Rhythmic augmentation']),part('Specific evidence','Semitone movement in opposite directions in bar 7 beat 3',['Ascending thirds in both parts in bar 7','A repeated bass note throughout bar 8','Whole-tone motion in the same direction']),part('Cadential effect','Decorates the cadence and emphasises the dominant',['Establishes a new tonic minor','Avoids the dominant entirely','Removes forward momentum'])]);
add([86],'Comment on the harmonic rhythm of the extract.',[
 part('General rate','Chord changes every one or two bars',['One chord per beat throughout','One chord every four bars','Exactly two chords per bar']),part('Pattern it settles into','1–1–2',['2–2–1','1–2–1','2–1–2']),part('Chords emphasised','G, F, A and G',['C, D, E and F','G, D, B and E','F, B-flat, E-flat and A-flat'])]);
add([87],'Comment on the tonality of the extract including any specific harmonic features.',[
 part('Tonal direction','Moves away from C major using dominant–tonic movement',['Stays exclusively in C major','Moves by parallel whole tones','Remains on an unchanging tonic pedal']),part('Harmonic progression','Circle of fifths',['Ascending chromatic scale only','Repeated plagal cadences only','Parallel diminished triads only']),part('Jazz harmonic features','Seventh and major seventh chords; some major chords become minor',['Only unaltered primary triads','Only suspended triads','Only augmented triads'])]);
window.ANALYSIS_TASKS=tasks;
})();