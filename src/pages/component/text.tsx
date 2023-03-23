    import axios from "axios";
    import { GetServerSideProps } from "next";
    interface todo {
      author : string ,
      description  : string ,
      content : string
    }
    export const getServerSideProps : GetServerSideProps  = async () => {
      const apiUrl  = "https://newsapi.org/v2/everything?q=keyword&apiKey=2563bb4d838c4c74ab4a14699b730019";
      const todolist  = await axios.get(apiUrl);
      const to  : todo[]  = todolist.data.articles ;
      if(!to) {
        return {
          notFound: true,
        };
      }
      return {
        props : {to},
      };
    }
    const Data = ({to} : {to:todo[]}) => {
      return (<>
        {
          to.map((total: todo)=> {
              return (<><h1>{total.author}</h1>
              <h1>{total.description}</h1></>);
          })
        }
      </>)
    }
    export default Data;