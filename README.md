<div align = "center">
  <h1>Portfolio Website</h1>

  <p>This is my personal portfolio website built using ReactJS, CSS and GraphQL.</p>
</div>

## Preview

![Portfolio Website Preview](https://user-images.githubusercontent.com/75929997/290880051-f05b1701-15c6-42c5-a8d0-cf63ca0d671a.png)

  
You can check out the live website [here](https://Kiran1689.github.io).

# Sections 📚

✔️ Summary and About me 🌟\
✔️ Skills 🤹‍♀️\
✔️ Education 🎓\
✔️ Certifications 🏆\
✔️ Open Source Projects and Contributions 🛠️\
✔️ Recent Works💻\
✔️ Experience 💼\
✔️ Blogs 📝\
✔️ Contact me 📧\

# Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [baseui](https://github.com/uber/baseweb)
- [react-reveal](https://www.react-reveal.com/)
- [styled-components](https://styled-components.com/)

---

# Clone and Use 📋

To run this project locally, follow these steps:


1. Clone the repository:

```bash
git clone https://github.com/Kiran1689/Kiran1689.github.io.git
```

2. Navigate to the project directory:

```bash
cd Kiran1689.github.io
```

3. Install the dependencies:

```node
npm install
```

4. Start the development server:

```bash
npm start
```

  
5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the website locally.

---

# Customize it to make your own portfolio ✏️
You can use this project as a template for your own portfolio website. Customize it by adding your own information.

There are basically 3 things that you need to change to customize this to anyone else's portfolio:
**package.json**, **Personal Information** and **Github Information**.

### 1. package.json

Open this file, which is in the main cloned directory, choose any "name" and change "homepage " to `https://<your-github-username>.github.io`. Do not forget the `https://`, otherwise fonts will not load.

### 2. Personal Information

You can change the personal information, experience, education, social media, certifications, blog information, contact information etc. in `src/portfolio.js` to directly reflect them in portfolio website.

### 3. Github Information

You will find `git_data_fetcher.js` file in the main directory of the repository. This file is used to fetch the data (Pull requests, Issues, Organizations, Pinned projects etc.) from your github.

In this file you need to replace: 

```javascript
GITHUB_TOKEN = your_token;
GITHUB_USERNAME = your_username;
```

You can get a github token as described [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). Give all permissions while generating token.

Now, you need to run following command. (Make sure you executed `npm install` before this)


```node
node git_data_fetcher.js
```

This will fetch all the data from your github and it will automatically replace my data with yours.
Whenever you want to update the github related information on the website you need to run this command.


### Choose Theme 🌈

- Open `src/theme.js` file where all available themes are mentioned with their respective color codes
- At the bottom of this file you will see the below code:
  - `export const chosenTheme = violetTheme;`
  - You need to change the name from `violetTheme` to whatever theme you want to set your website to
- That's it. You just need to change the theme name and the code will take care of everything else

---

# Contributing

If you'd like to contribute to this project, please open an issue or submit a pull request.

# License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

