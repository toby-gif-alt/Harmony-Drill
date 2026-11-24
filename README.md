# Harmony Drill — AS91421

Static web app. Open `index.html` locally or upload the entire folder contents to a GitHub repository and enable Pages for the main branch/root. No build step, login, server, or npm installation is necessary.

- `questions.js`: 87 hand-authored multiple-choice drills drawn from the supplied combined NZQA PDF, with year, question ID, exam and schedule page numbers, answer and model response.
- `assets/`: original exam pages rendered from the supplied PDF. Keep the folder intact. Exact original exam text is on the page images; the interactive prompt is often a shorter scaffolded adaptation. Model feedback is based on the assessment schedule, not a claim that every item is an independently scored Excellence criterion.
- All 11 individual exam PDFs and 11 assessment schedules are linked directly from the app. The links translate the original combined PDF page numbers into individual booklet pages. Schedule links appear after answering. A local copy of the original 202-page combined PDF is optional.
- Original-score links are reference editions, not reconstructed NZQA extracts. Some scores are redacted, and some earlier separate resource booklets are not available in the combined PDF.
- Browser local storage tracks latest correct/missed answers. No student details are collected. Review and unattempted modes filter by that device's results. Use the reset button to clear.

## Scope
This is a first working version, not exhaustive transcription of every possible analytical answer or a full exam simulator. Covers all 11 years; emphasis on key identification, key relationships, modulation evidence, harmonic rhythm, harmonic function and compositional devices. Full harmonisation, score annotation and chord-by-chord marking are outside this version. Some alternative accepted answers are included in feedback; the response choices are designed around one best answer. The 2015–2017 questions include foundational steps, not necessarily standalone Excellence tasks.

Source material: NZQA AS91421 exam papers and schedules, 2015–2025, supplied by teacher. Keep distribution limited to authorised classroom use. No NZQA endorsement is implied.

## Guided practice
Each question opens a topic-specific tutorial by default: score-reading prompts, an independent worked example and a written answer scaffold. The Auto-open tutorial checkbox can be switched off for independent practice; its preference is saved on the device. The tutorial remains available on demand. Worked examples are teaching examples, not quotations from the marking schedules.
