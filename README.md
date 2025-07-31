Prerequsite - 
you should have node js and git install

# Movie Finder App

This is a simple React application that allows users to search for movie information using the OMDB API.

![movieFinderReact (1)](https://github.com/Atharvaapande/MovieFinderReact/assets/128508298/b20377dc-a97f-4ec1-ab28-178142d442c3)


## Features

- Search for movies by their title.
- View detailed information about the searched movie, including title, year, genre, plot, actors, director, writer, and awards.
- Dynamic display of movie poster and details upon successful search.

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine.

```bash
git clone https://github.com/Atharvaapande/MovieFinderReact.git
```

2. Navigate to the project directory.

```bash
cd MovieFinderReact
```

3. Install dependencies using npm or yarn.

```bash
npm install
```

or

```bash
yarn install
```

4. Obtain an API key from the [OMDB API website](https://www.omdbapi.com/) (it's free for limited use).

5.

```bash
npm run dev
```

6. Open your browser and navigate to your local host [http://localhost:xyz] to view the application.
7. To make the application production ready do the following - 
a)In vs code or any IDE open terminal in the folder where the project is stored
b)run
```bash
npm run build
```
c)this will generate dist file and done, now you can deploy this dist file, in my case i used netlify, a free hosting platform  

## Usage

- Enter the title of the movie you want to search for in the search bar.
- Click the "Search" button to retrieve information about the movie.
- If the movie is found, detailed information along with the movie poster will be displayed.
- If the movie is not found, an appropriate message will be displayed.

## Credits

This application was created by [Your Name].

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README section according to your project's specific details and requirements.
