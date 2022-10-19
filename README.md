<br/>
<p align='center'>
    <img src="./img/logo_trans.png" width=400/>
</p>
<br/>

CarbonOracle
---

Carbon visualization platform for software and job planning on Azure network.

Live Demo: <a href='https://www.carbonoracle.surge.sh' target="_blank">https://www.carbonoracle.surge.sh</a>

Demo video:

# Running locally
Terminal 1: `cd proxy-server; yarn; yarn start`
Terminal 2: `yarn; yarn start`

Website should now be running on port 3000 (server on 3001).

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

Before running a job check the `CarbonOracle` app for the best times in your region (and even outside your region) for the best time slot.


### Potential future work:
* Add ability to multi-select region locations on map
* Allow user to specify 'load' duration for the forecast API.
* Based on selected locations make an api call to the sdk to determine the best forecast.
* Suggest regions to run the load if the user didn't select a region with great carbon emissions.
* Add chart visualization with the best time range highlighted on the chart for the user in an easy to read format.
* Add history tab to the site to compare accuracy of forecasts.
* Add discussion tab for software developers to collaborate and share thoughts on how to best optimize for carbon footprint.


### Future work

* Expand to other cloud service platforms (GCP, AWS, DigitalOcean, etc.)
* More dynamic recomendations based on job to be done.

### Useful links
* https://taikai.network/gsf/hackathons/carbonhack22
* https://github.com/Green-Software-Foundation/carbon-aware-sdk
* https://docs.google.com/document/d/16P5XCQwn5wm1Sf-S496i0yliUDqEBTYC73ZCxW-iXL8/edit#heading=h.s93ajhcngbd3