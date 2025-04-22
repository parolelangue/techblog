# Introduction

- Application build for 'Aprotech' with Docusaurus + ReactJS.
- Build by team STV.

# Run Project

- step 1: npm install
- step 2: npm run start

# Setup Prettier

- step 1: install extension Prettier
- step 2: Choose any file ---> right click ---> format document with ---> select prettier.

# Flow gitlab

- Branch follow prefix name: fix/**, feat/** ,hotfix/\_\_ ,...
- Commit follow prefix name: fix:** ,feat:** ,hotfix:\_\_ ,...
- ( \_\_ is content of bugs,features,updates,... )

# Technologies

- ReactJS
- Docusaurus

# Tools

- Prettier
- Husky

# Author

- Frontend - Nguyen Van Tuan

# Documentation setup

`

- translation setup - https://www.youtube.com/watch?v=2Arz1j5n2u0

- search algolia setup: https://www.youtube.com/watch?v=xXwvDVGBlqQ (20:00)

* wait for Algolia team send API key, ID.
* run command in Ubuntu:

- cd ~/app/web/docusaurus-app
- sudo docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -
  r tostring)" algolia/docsearch-scraper
