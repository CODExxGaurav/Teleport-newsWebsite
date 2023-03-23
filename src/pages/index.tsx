import Link from "next/link";
import Image from "next/image";
import Menu from "./component/menu";
import IMAGE from "./component/image";
import axios from "axios";
import Navbar from "./component/navBar";
import { GetStaticProps } from "next";
import {useState} from "react" ;
interface todo {
  title : string;
  publishedAt : string;
  author : string ;
  url : string;
  content : string;
  urlToImage : string;
  description : string 
}
export const getStaticProps : GetStaticProps  = async () => {
  const apiUrl1 = "https://newsapi.org/v2/everything?q=keyword&apiKey=d6aa63ff59614362a8fcc47dc8a2ca56";
  const   allNewsfirst = await axios.get(apiUrl1);
  const  allNews : todo[]  = allNewsfirst.data.articles ;

  const apiUrl2 = "https://newsapi.org/v2/everything?q=defence&apiKey=d6aa63ff59614362a8fcc47dc8a2ca56";
  const defensefirst  = await axios.get(apiUrl2);
  const defense  : todo[]  = defensefirst.data.articles ;

  const apiUrl3 = "https://newsapi.org/v2/everything?q=entertainment&apiKey=d6aa63ff59614362a8fcc47dc8a2ca56";
  const entertainmentfirst  = await axios.get(apiUrl3);
  const  entertainment  : todo[]  = entertainmentfirst.data.articles ;

  const apiUrl4 = "https://newsapi.org/v2/everything?q=finance&apiKey=d6aa63ff59614362a8fcc47dc8a2ca56";
  const  financefirst  = await axios.get(apiUrl4);
  const finance : todo[]  = financefirst.data.articles ;

  const apiUrl5 = "https://newsapi.org/v2/everything?q=politics&apiKey=d6aa63ff59614362a8fcc47dc8a2ca56";
  const politicsfirst  = await axios.get(apiUrl5);
  const politics  : todo[]  = politicsfirst.data.articles ;
  if(!allNews || !defense  || !entertainment || !finance ) {
    return {
      notFound: true,
    };
  }
  const to :Array<todo[]> = [allNews,defense,entertainment,finance,politics];
  return {
    props : {to}

  };
}
const Home = ({to} : {to: Array<todo[]>}) => {
  const logo1 = "Daily";
  const logo2 = "News";
  const [down,changedown] = useState(8) ; 
  const [display,changedisplay] = useState("inline");
  const [hh,changeindex] = useState(0);
  function changeit(value : any) {
      changeindex(value) ;
      changedown(8);
  }
  function increaseLength() {
    if(down + 10 < to[hh].length) {
      changedown(down+10 > to[hh].length ? to[hh].length  : down + 10) ;
    }
    else {
      changedown(to[hh].length);
      changedisplay("none");
    }
  }
  return (
      <div className="header">
          <div className="parent">
         <Navbar></Navbar>

      <div className="test">
      <div style={{display : "flex" , justifyContent : "space-evenly",width : "100%" }}>
        <div><button className="load-more1"  onClick={() => {
           changeindex(0) ;
        }}>All news </button></div>
        <div><button className="load-more1" onClick={() => {
           changeindex(1) ;
        }}>Defense</button></div>
        <div><button className="load-more1" onClick={() => {
           changeindex(2) ;
        }}>Entertainment</button></div>
        <div><button className="load-more1" onClick={() => {
           changeindex(3) ;
        }}>Finance</button></div>
        <div><button className="load-more1" onClick={() => {
           changeindex(4) ;
        }}>Politics</button></div>
    
     </div>
     <hr />

      {   
              to[hh].slice(0,down).map((total: todo,index:any)=> {
             return (
              <div className="testdiv" key= {index}> 
             <div className="news-divone">
             {total.urlToImage?<IMAGE src = {total.urlToImage}></IMAGE>:<IMAGE src = {"breaking.jpg"}></IMAGE>}
             </div>
             <div className="news-divtwo">
               <h2 className="content-area1">{total.title.substr(0,60)}</h2>
               <p  className="content-area">Dated : {total.publishedAt.substr(0,20)}</p>
               <p  className="content-area">Published by : {total.author ? total.author.substr(0,20) : "sources"}</p>
               <p  className="content-area">{total.content.substr(0,100) + "..."}</p>
               <p style={{    textAlign: "center",marginBottom:"20px"}}> <button  className="card-button"><a href = {total.url}>Click to read full article</a></button></p>
             </div>
           </div>
             );
        })
      }
      <div className="load-more-div" ><button onClick = {increaseLength} style = {{display : display}}className="load-more">Click to load More...</button></div>
    </div>
      </div> </div>
  );
};
export default Home;