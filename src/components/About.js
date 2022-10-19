import React from "react"
import ReactMarkdown from "react-markdown"

import logo from './../assets/logo_trans.png'

const text = `
### Motivation

It can be tempting to just select the region closest to you when doing a job.

Importance of Carbon

It's important to note that CarbonOracle presents a *forecast* of the best times and can (and should) be treated as an approximation. CarbonOracle can both tell you which times to generally avoid as well as which times to prefer.

### Value propositions
* No command line tools required - simply open carbonoracle before you run or schedule a job.
* Use carbonoracle to discover regions (even outside the ones you most commonly use) that are present the most optimal time windows.
* Use patterns to schedule jobs even beyond the forecast window.
* Since CarbonOracle runs separately from your dev process, no need to add unnecessary coupling or custom logic to each task to query best carbon time windows.

### How to use

Before running a job check the 'CarbonOracle' app for the best times in your region (and even outside your region) for the best time slot.`

export const About = () => {
    return <div>
        <br/>
        <img src={logo}></img>
        <br/>
        <br/>
        <h1>About</h1>
        <ReactMarkdown>{text}</ReactMarkdown>
        <a href="https://github.com/cbonoz/carbon22" target="_blank">Github</a>
        <p>

</p>

</div>
}