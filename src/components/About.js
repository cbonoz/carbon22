import React from "react"
import ReactMarkdown from "react-markdown"
import { APP_NAME } from "../constants/constants"

import logo from './../assets/logo_trans.png'

const text = `
### Motivation / Importance of Carbon

Many software engineers may shrug at the question of the carbon foot print of their work. As more and more software programs get built, 
the efficiency of those programs and their impact on the environment is only going to become more important.

It can be tempting to just select the region closest to you when doing a job, however this may not always be the green-friendly choice, and can often be by a wide margin.
Green software engineering takes into consideration software practices and architecture, hardware and data center design, electricity markets and climate change. In addition, green software engineering aims to generate fewer greenhouse gas emissions and reduce a company's carbon footprint.

### What is CarbonOracle

${APP_NAME} is a tool that can be easily integrated into green job execution timings and help identify the best times and regions to do computationally intensive work. 

It's important to note that ${APP_NAME} presents a *forecast* of the best times and can (and should) be treated as an approximation. ${APP_NAME} can both tell you which times to generally avoid as well as which times to prefer.

### Value propositions
* No command line tools required - simply open ${APP_NAME} before you run or schedule a job.
* Use carbonoracle to discover regions (even outside the ones you most commonly use) that are present the most optimal time windows.
* Use patterns to schedule jobs even beyond the forecast window.
* Since ${APP_NAME} runs separately from your dev process in the cloud, there is no need to add unnecessary coupling or custom logic to each task to query best carbon time windows.


### How to use

Before running a job check the '${APP_NAME}' app for the best times in your region (and even outside your region) for the best time slot.`

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