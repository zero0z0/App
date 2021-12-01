import logo from './logo.svg';
import './App.css';
import React, {FC,ChangeEvent,useState} from 'react';
 


function App() {
  const [inputList,setInputList]  = useState("");
  let arr: Anime[] = [];
  
  
	interface Anime {
		title: string;
		mal_id: string;
		rank: number;
	}

  	
  const handlechange = (event: ChangeEvent<HTMLInputElement>)=>{
	  setInputList(event.target.value);
  }
  
  const List: React.FC = () => {
      fetch('https://api.jikan.moe/v3/top/anime/1/upcoming')
			.then(function(response){
				return response.json();
				})
			.then(function(posts){
				//console.log(posts);
				posts.top.map((post:any) =>{
					//arr.push( post);
					let pen: Anime = {
						title: post.title,
						mal_id: post.mal_id,
						rank: post.rank
					}
					arr.push(pen);
				});
			});
			console.log(arr);
			const data = arr.map((value)=>{
					<p> {value.title} </p> 
					});
		return ( <div> {data} </div> );
  }

  const FindData = () => {
	  const found = arr.find(element => element.title === inputList);
	  console.log(found);
	  /*arr.map((value)=>{
		  console.log(value.title); 
	  })*/  
	  setInputList("");
  }
  
	
  return (
		
    <div className = "main_div">		
			<input type="text" placeholder="search"  onChange= {handlechange}  value = {inputList}/>
			<button onClick={FindData} >tìm</button>	
			<List />
	</div>
  );
}

export default App;
