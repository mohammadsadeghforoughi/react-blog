# React blog using Mui 5, Redux and, TypeScript
Simple React Blog


## Project Stack
- React.js
- Redux
- TypeScript
- Axios



### Features
-Caching API responces using Redux and avoiding using `Redux Saga` and `Redux Thunk` 



----------
## Run instruction

There is two way to run this project: 

### Docker
You can run project with Docker. Run these commands to run the project.  
**Note: Your machine must installed `Docker`  

1- Clone repository   
 `git clone https://github.com/mohammadsadeghforoughi/react-blog.git`   

2- Build the Docker Container  
`docker build -t react-blog .`  

3- Run the container  
`docker run -d -p 5500:80 --name react-blog-container react-blog`

4- Open your browser and enter [http://localhost:5500](http://localhost:5500)

----------


### Using React Scripts
To run project with `react-scripts`, run these lines blow:  
1- Clone repository   
 `git clone https://github.com/mohammadsadeghforoughi/react-blog.git`  
2- Install dependencies  
 `yarn`  
3- Start the project  
 `yarn start` 

4- Open your browser and enter [http://localhost:3000](http://localhost:3000)