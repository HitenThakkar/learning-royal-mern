import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import "./style.css"
import { AppContext } from '../../context';
import { useSelector } from 'react-redux';

export const Series = () => {

  const state = useSelector((state) => state);
  console.log("state...", state);
  const myTheme = {
    backgroundColor: state.theme.theme == "dark" ? "black" : "white",
    color: state.theme.theme == "dark" ? "white" : "green",
  };
    const {company} = useContext(AppContext)
    const [series, setSeries] = useState([
        {
            id:1,
            name: "Dark",
            imgsrc: "https://wallpapercave.com/wp/wp4056410.jpg",
            title: "A Netflix Original Series",
            link: "https://www.netflix.com/in/title/80100172"
        },
        {
            id:2,
            name: "Extra Curricular",
            imgsrc: "https://wallpapercave.com/wp/wp7418499.jpg",
            title: "A Netflix Original Series",
            link: "https://www.netflix.com/in/title/80990668"
        },
        {
            id:3,
            name: "Stranger Things",
            imgsrc: "https://wallpapercave.com/wp/wp1917154.jpg",
            title: "A Netflix Original Series",
            link: "https://www.netflix.com/in/title/80057281"
        }
    ]);

  return (
    <div style={myTheme}>
      <h1>SERIRS</h1><br/><br/><br/>
      <div className="main">
      <h3>Comapny : {company}</h3>

      <div className="container" style={myTheme}>
        {
            series?.map((s)=>{
                return(<div className="box" style={myTheme}>
                        <h5>NAME : {s.name}</h5>
                        <img  src={s.imgsrc} alt="img" />
                        <h5>TITLE : {s.title}</h5>
                        <a href={s.link} target="_blank">{s.link}</a> <br/>
                        <Link to = {`/series/detail/${s.id}/${s.name}`} className="btn btn-primary">DETAIL</Link>
                        {/* <Link to = {`detail/${ser.id}`} className="btn btn-info">DETAIL</Link> */}

                </div>)
            })
        }
      </div>
    </div>
    </div>
  )
}
