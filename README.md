# TechBlog

TechBlog is a modern, responsive blog built with Docusaurus, focusing on technology, programming, and innovation.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
* You have a Windows/Linux/Mac machine.

## Installing and Running TechBlog

1. Set up the project:


First, make sure you have Node.js installed on your computer. Then, open your terminal or command prompt and create a new Docusaurus project:

```shellscript
npx create-docusaurus@latest my-techblog classic
cd my-techblog
```

2. Open the project in VSCode:


```shellscript
code .
```

This command will open the project in VSCode. If it doesn't work, you can manually open VSCode and use File > Open Folder to navigate to your project directory.

3. Install dependencies:


In the VSCode terminal (Terminal > New Terminal), run:

```shellscript
npm install
```

4. Copy the blog posts:


Copy the five blog post files we created earlier into the `blog` directory of your project.

5. Create custom components:


Create the following files in your project:

- `src/components/TechTermOfTheDay.js`
- `src/components/BlogPostList.js`
- `src/theme/BlogListPage.js`


Copy the content we provided earlier for each of these files.

6. Modify the configuration:


Open `docusaurus.config.js` and update it with the configuration we provided earlier.

7. Update the CSS:


Open `src/css/custom.css` and replace its content with the CSS we provided earlier.

8. Run the development server:


In the VSCode terminal, run:

```shellscript
npm run start
```

This command starts the development server. You should see output indicating that the server is running, typically at `http://localhost:3000`.

9. View your site:


Open your web browser and go to `http://localhost:3000`. You should now see your TechBlog running locally.

10. Edit and see changes in real-time:


As you make changes to your files in VSCode, Docusaurus will automatically reload the page in your browser, allowing you to see your changes in real-time.

Additional VSCode tips for working with Docusaurus:

1. Install helpful extensions:

    1. ESLint for JavaScript linting
    2. Prettier for code formatting
    3. MDX for better MDX file support



2. Use the integrated terminal in VSCode (View > Terminal) to run commands without leaving the editor.
3. Use the Source Control view (Ctrl+Shift+G or Cmd+Shift+G on Mac) to manage your git repository if you're using version control.
4. Use the File Explorer (Ctrl+Shift+E or Cmd+Shift+E on Mac) to navigate your project structure easily.
5. Use the Search functionality (Ctrl+Shift+F or Cmd+Shift+F on Mac) to find content across your project quickly.


Remember, if you encounter any issues or errors, the terminal output in VSCode will often provide helpful information for troubleshooting.

By following these steps, you should have your Docusaurus TechBlog project up and running in VSCode, ready for further development and customization. Happy coding!