# Project Name: _**Tempo**_

## Description
Tempo is a full-stack web application that conveniently and intuitively connects Dental Hygienists that are looking for temporary work with Dental Offices in need of temporary Hygienists. Tempo eliminates a major pain-point for both Dental Hygieniests and Offices, and simplifies the process for all users.

## Link to YouTube Demonstration
https://www.youtube.com/watch?v=ML1jiIpbPNY

## MVP
- [ ] Dental Hygieniests can sign-up/login securely
- [ ] Dental Offices can sign-up/login securely
- [ ] Hygienists can add their availability, work-radius, work-preferences, pay-range, and contact information.
- [ ] Offices can create job postings that include the date/time, job-details/preferences, pay-rate, office details/information/links, and contact information.
- [ ] Hygieniests can view a filtered list of job postings that match their criteria and can select a job posting to get more detailed information.
    - [ ] Hygieniest can then conditionally accept a job opportunity, send a message to the Office if anything needs clarification or if there are any questions/alternative conditions, and wait for the Office to review, respond to any messages, then either accept/reject the proposal.
    - [ ] If both parties accept the job's terms and conditions, then the job is considered to be accepted and is then removed from being publicly available and it's status is set to "Accepted".
- [ ] Both parties can see any upcoming accepted job opportunities/relevant information on their Home views.  

## Pages
- [ ] Login/Landing Page
- [ ] Hygienist Views:
    - [ ] Hygienist Home Page
        - [ ] Any currently "Accepted" job opportunities
        - [ ] Job availability/preferences   
    - [ ] Matching Job opportunities   
    - [ ] Work History   
- [ ] Office Views:
    - [ ] Office Home Page
        - [ ] Office Info/Details
    - [ ] Job Postings(current/past)
    - [ ] List of Hygienists that have previously temped

## Database Tables
- [ ] User Tables (One-to-Many)
    - [ ] Hygienists 
    - [ ] Office/OM 
- [ ] Job Postings 

## Future Features
- [ ] After a job has been completed, both parties can leave a review of the other party, and indicate whether or not they would be willing to work with each other again in the future
    - [ ] If both parties say yes, then they get added to a short-list and will be notified of subsequent job opportunities before they are posted publicly, allowing Hygieniests and Offices to develop relationships/preferences.
- [ ] Integrate a secure payment system that facilitates the financial transaction and manages tax/reporting information for both parties.
- [ ] Create an instant-messaging tool that makes it easier for both parties to communicate within the application, and could safeguard user data if they didn't want to give out their contact information before accepting a job opportunity.
- [ ] An event with the job details/info is added to both party's linked calendars and both parties will receive an email reminder 24 hours before any "Accepted" job postings.
- [ ] Allow Offices to post High-Demand or ASAP Job postings to a different 
