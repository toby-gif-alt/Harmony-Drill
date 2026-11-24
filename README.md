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

## Three progressive practice levels
- Learn: 87 individual drills; tutorial opens by default; instant feedback.
- Apply: 40 source-grouped analysis tasks, 115 selectable response components; answers are checked together, with a schedule-based model after submission. Tutorial available on demand.
- Exam Ready: the same 40 scoped analysis tasks, original exam pages, written answers without choices or tutorials, and model response/schedule links after submission. Students self-assess confidence; this is not automated NZQA grading. Redacted or missing scores remain flagged, and scoped prompts may be adapted from longer original questions.
- Progress, missed-question and unattempted filters are independent for each practice level. All 87 source drills are represented by the grouped tasks. The analysis-tasks.js file contains the grouping and authored components.
