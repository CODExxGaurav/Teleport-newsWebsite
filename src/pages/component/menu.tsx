import {useState} from "react" ;
const Menu = (prop:any) =>  {
    const [color,changecolor] = useState("white");
     const [sr,changesr] = useState("icon1.png");
    const [disp,changedisplay] = useState("none") ;
    const [title,changetitle] = useState("click it to open");

    const [index,changeindex] = useState("0");
    const [width,changewidth] = useState("7%");
    function changeit() {
        if(disp==="flex") {
            changecolor("white");
            changedisplay("none") ;
            changesr("icon1.png");
            changetitle("click it to open");
            changeindex("0");
            changewidth("7%");
        }
        else {
            changecolor("#181818");
            changesr("icon2.jpg");
            changedisplay("flex") ;
            changetitle("click it to close");
            changeindex("1");
            changewidth("200px");
        }
    }
    return (<div className="drower" style={{ 
        position: "fixed",
        zIndex: index,backgroundColor : color , width :width,height:"100%",display : "fixed"}}>
   <div className="Menu-image" style={{display:"flex" ,justifyContent : "center"}}><img onClick = {changeit} className = "menuimage"  src={"/" + sr}   title = {title}alt={"this is icon"}/></div> 
   <div className="Menu" style={{display : disp ,backgroundColor : color , height : "100%", 
   flexDirection : "column" , justifyContent : "space-evenly",marginBottom: "20px",boxShadow :  "10px 0 12px 0 rgba(0, 0, 0, 0.3)" }}>
        <div  className="element-hr" ><hr></hr></div>
        <div  className="element"><p onClick={()=>{
              prop.fun(0)}}>All News</p></div>
        <div  className="element"><p  onClick={()=>{prop.fun(1)}}>Defence</p></div>
        <div  className="element"><p  onClick={()=>{prop.fun(2)}}>Entertainment</p></div>
        <div  className="element"><p  onClick={()=>{prop.fun(3)}}>Finance</p></div>
        <div  className="element"><p  onClick={()=>{prop.fun(4)}}>Politics</p></div>
    </div>
   </div>);
}
export default Menu ;