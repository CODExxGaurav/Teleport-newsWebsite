import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
const Nav = (props:any) => {
  const logo1 = "Daily";
  const logo2 = "News";

  return (
   <> <div className="top-nav">
    <div className="container">
    <div className="cont-head">
    <span className = "main-logo"><Image src={"/logo.png"} width={37} height = {35} alt = {"this is an logo image"}></Image></span>
      <div >
      <p style={{paddingTop: "11px"}}>{logo1 + logo2}</p>
        <p className="cont-down">
        </p>
      </div>
    </div>
  </div>
  <div>
    <div className="cont-input">
      <form>
        <input placeholder="Search here" name="search" onChange={(e)=> {
          e.preventDefault() ;
          props.fun1(e.target.value);
        }} value={props.value}></input>{" "}
        <button onClick={(e)=> {
             e.preventDefault() ;
             props.fun1(props.value);
        }}>
          <span className="span">Search</span>
        </button>
      </form>
    </div>
    </div>
</div>
  </>
  );
};
export default Nav;
