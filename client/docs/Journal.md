# DOCUMENTING DEVELOPMENT PROGRESS - FE
## 1.28.24
* Looked at a some dev portfolios and found these font types to be extremely appealing and slick, saving for future FE development
    - font-family: var(--font-inter),ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    - font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";

* potential idea for logo/styling for platform
    - ![logo](potential_logo.png)
        * bigger font: josefin slab
        * smaller font: comfortaa

- I have prior familiarity with (styling, components)chakraui, framermotion (animation), three.js (three-d models) but as it is a new project, I am opting to try out: mantine ui (styling, components), gsap + react transition group (animation) with three.js
- Changed current sentence on `index.html`

* performed these installs
    - [mantine getting-started](https://mantine.dev/getting-started/)
    * Installed MantineUI (core, hooks):
        1. `npm install @mantine/core @mantine/hooks`
        2. `npm install --save-dev postcss postcss-preset-mantine postcss-simple-vars`

    - [gsap instalation](https://gsap.com/docs/v3/Installation)
        1. `npm install gsap`
    - [react-transition-group' install](https://reactcommunity.org/react-transition-group/)
        1.  `npm install react-transition-group --save`

    - [three.js install](https://threejs.org/docs/#manual/en/introduction/Installation)
        1. `npm install --save three`

## 1.29.24
- My initial idea is to map over exams in get all exams and store in array to act as a pseduo-db to allow for testing of CRUD operations
    * primitive: just map over values in dictionary like structure and display all in a react chart

### Performed Steps
1. `npm install react-router-dom` (install react router)
### After Meeting
- Going with chakraUI and framermotion for team
- going to experiment with mantine and gsap in spare time
